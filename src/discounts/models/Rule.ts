import { RewardTypeEnum, RewardValueTypeEnum } from "@dashboard/graphql";
import { Option } from "@saleor/macaw-ui-next";

import { Condition } from "./Condition";

export interface Rule {
  id: string;
  name: string;
  description: string | null;
  channel: Option | null;
  rewardType: RewardTypeEnum | null;
  rewardValue: number;
  rewardValueType: RewardValueTypeEnum;
  conditions: Condition[];
  hasPredicateNestedConditions?: boolean;
}

export const createEmptyRule = (): Rule => ({
  id: "",
  name: "",
  description: "",
  channel: null,
  rewardType: null,
  rewardValue: 0,
  rewardValueType: RewardValueTypeEnum.FIXED,
  conditions: [],
  hasPredicateNestedConditions: false,
});
