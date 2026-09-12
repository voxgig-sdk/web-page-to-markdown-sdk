import { WebPageToMarkdownEntityBase } from '../WebPageToMarkdownEntityBase';
import type { WebPageToMarkdownSDK } from '../WebPageToMarkdownSDK';
import type { Control } from '../types';
import type { ConvertUrlToMarkdownGet, ConvertUrlToMarkdownGetLoadMatch } from '../WebPageToMarkdownTypes';
declare class ConvertUrlToMarkdownGetEntity extends WebPageToMarkdownEntityBase<ConvertUrlToMarkdownGet> {
    constructor(client: WebPageToMarkdownSDK, entopts: any);
    make(this: ConvertUrlToMarkdownGetEntity): ConvertUrlToMarkdownGetEntity;
    load(this: any, reqmatch?: ConvertUrlToMarkdownGetLoadMatch, ctrl?: Control): Promise<ConvertUrlToMarkdownGetEntity>;
}
export { ConvertUrlToMarkdownGetEntity };
