import { historyEndpoints, currentPriceEndpoints } from ".";
import {
  initialCompounds,
  initialPercentages,
  initialPrices,
} from "../const/initialValues.const";
import { IMetalsOptions, metals } from "../features/Calculator/types";
import { IData } from "../types/interfaces";
import {
  prepareDataForChartAndLocalStorage,
  preparePricesData,
} from "../utils/data.mod.util";
import { LSHistoryUtil, LSMetalConfigUtil, LSUtility } from "./localStorage.service";
import { CurrentPrice, IMetalConfigProvider, MetalKeys } from "./types";

export class MetalDataProvider {
  public static getHistory<T>(key: metals): Promise<IData> {
    return new Promise(async (resolve, reject) => {
      const updated = LSHistoryUtil.checkHistoryUpdatedToday(key);
      const fromLS = LSHistoryUtil.get<IData>(key);
      if (updated && fromLS !== undefined) {
        return resolve(fromLS);
      }

      const data = await historyEndpoints[key]();
      if (data === null) {
        reject(new Error("No data found"));
      }
      const preparedData = prepareDataForChartAndLocalStorage(data.data);
      LSHistoryUtil.set(key, preparedData);

      resolve(preparedData);
    });
  }

  public static getCurrentPrice<T>(): Promise<CurrentPrice> {
    return new Promise(async (resolve, reject) => {
      const mainSyms = await currentPriceEndpoints.mainSyms();
      const secondarySyms = await currentPriceEndpoints.secondarySyms();
      if (mainSyms === null || secondarySyms === null) {
        const fromLS = LSUtility.get<CurrentPrice>(MetalKeys.currentPrice);
        if (fromLS === undefined) reject(new Error("No data found"));
        if (fromLS) resolve(fromLS);
      }
      const mainSecondaryUnion: CurrentPrice = preparePricesData([
        ...mainSyms.data,
        ...secondarySyms.data,
      ]);
      LSUtility.set(MetalKeys.currentPrice, mainSecondaryUnion);

      resolve(mainSecondaryUnion);
    });
  }
}

export class MetalConfigProvider implements IMetalConfigProvider {
  public getPrice(): IMetalsOptions {
    return LSMetalConfigUtil.getLocalCustomPrice() || initialPrices;
  }

  public savePrice(value: IMetalsOptions): void {
    LSMetalConfigUtil.setLocalCustomPrice(value);
  }

  public getPercentages(): IMetalsOptions {
    return LSMetalConfigUtil.getPercentages() || initialPercentages;
  }

  public savePercentages(value: IMetalsOptions): void {
    LSMetalConfigUtil.setPercentages(value);
  }

  public getCompounds(): IMetalsOptions {
    return LSMetalConfigUtil.getCompounds() || initialCompounds;
  }

  public saveCompounds(value: IMetalsOptions): void {
    LSMetalConfigUtil.setCompounds(value);
  }
}
