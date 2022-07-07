/**
 * 判断一个磁盘路径对象是否为【文件】
 */
export declare function isFilePath(p: string): Promise<boolean>;
/**
 * 判断一个磁盘路径对象是否为【文件夹】
 */
export declare function isFolderPath(p: string): Promise<boolean>;
/**
 * 获取扩展名（小写不带点）
 */
export declare function getExtName(p: string): string;
/**
 * 返回标准的路径
 */
export declare function getStandardPath(p: string, isFolder: boolean): string;
/**
 * 将文件物理路径转换为 file 协议路径（如果路径中有#号，则也会将其转换为%23，从而避免浏览器加载时报错）
 */
export declare function convertFilePathToUrl(p: string): string;
/**
 * 获取指定文件夹路径下的所有文件路径
 */
export declare function getFilePathListInFolder(p: string, isRecursion?: boolean): Promise<string[]>;
/**
 * 获取指定文件夹路径下的所有文件夹路径
 */
export declare function getFolderPathListInFolder(p: string, isRecursion?: boolean): Promise<string[]>;
//# sourceMappingURL=index.d.ts.map