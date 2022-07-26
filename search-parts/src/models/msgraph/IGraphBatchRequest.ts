export interface IGraphBatchRequest {
    id: string;
    dependsOn?: string[];
    method: HttpMethod;
    url: string;
    body?: any;
    headers?: any;
}
  
export interface IGraphBatchBody {
    requests: IGraphBatchRequest[];
}

export enum HttpMethod {
    Get = 'GET',
    Post = 'POST'
}