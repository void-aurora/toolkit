export interface PromptTypeValueMap {
  Toggle: boolean;
  Text: string;
  SingleSelect: string;
  MultiSelect: string[];
}

export type PromptType = keyof PromptTypeValueMap;

/**
 * The options for cli prompt.
 */
export interface PromptOptions<T extends PromptType = 'Toggle'> {
  /**
   * The title for the prompt.
   */
  subject: string;

  /**
   * The type for the prompt.
   */
  type: T;

  /**
   * The default input value.
   */
  defaultValue?: PromptTypeValueMap[T];

  /**
   * The function for verifying input.
   * If invalid, throw error.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  verifyInput?: (text: any) => Promise<void>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle: (text: any) => Promise<void>;
}
