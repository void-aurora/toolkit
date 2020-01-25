/**
 * The options for cli command.
 */
export interface CommandOption {
  name: string;
  verifyInput?: (text: string) => Promise<void>;
}
