import { IMetalsOptions } from "../features/Calculator/types";
import { checkIsDateIsToday } from "../utils/date.utils";

export class LSUtility {
  public static get<T extends object>(key: string): T | undefined {
    const item = localStorage.getItem(key);
    if (item === null) {
      return undefined;
    }
    return JSON.parse(item);
  }

  public static set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // use rc-notification
      console.log("Error in set LocalStorage", e);
    }
  }

  public static remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export class LSMetalConfigUtil extends LSUtility {
  public static getLocalCustomPrice(): IMetalsOptions | undefined {
    return this.get<IMetalsOptions>("localPrice");
  }

  public static setLocalCustomPrice(value: IMetalsOptions): void {
    this.set("localPrice", value);
  }

  public static getPercentages(): IMetalsOptions | undefined {
    return this.get<IMetalsOptions>("percentages");
  }

  public static setPercentages(value: IMetalsOptions): void {
    this.set("percentages", value);
  }
  public static getCompounds(): IMetalsOptions | undefined {
    return this.get<IMetalsOptions>("compounds");
  }

  public static setCompounds(value: IMetalsOptions): void {
    this.set("compounds", value);
  }
}

export class LSHistoryUtil extends LSUtility {
  public static checkHistoryExists(key: string): boolean {
    return LSHistoryUtil.get(key) !== undefined;
  }

  public static checkHistoryUpdatedToday(key: string): boolean {
    const { date } = LSHistoryUtil.get(key) || {};
    if (!date) return false;

    return checkIsDateIsToday(date);
  }
}
