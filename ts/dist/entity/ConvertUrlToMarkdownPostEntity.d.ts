import { WebPageToMarkdownEntityBase } from '../WebPageToMarkdownEntityBase';
import type { WebPageToMarkdownSDK } from '../WebPageToMarkdownSDK';
import type { Control } from '../types';
import type { ConvertUrlToMarkdownPost, ConvertUrlToMarkdownPostCreateData } from '../WebPageToMarkdownTypes';
declare class ConvertUrlToMarkdownPostEntity extends WebPageToMarkdownEntityBase<ConvertUrlToMarkdownPost> {
    constructor(client: WebPageToMarkdownSDK, entopts: any);
    make(this: ConvertUrlToMarkdownPostEntity): ConvertUrlToMarkdownPostEntity;
    create(this: any, reqdata?: ConvertUrlToMarkdownPostCreateData, ctrl?: Control): Promise<ConvertUrlToMarkdownPostEntity>;
}
export { ConvertUrlToMarkdownPostEntity };
