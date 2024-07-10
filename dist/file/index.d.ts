/**
 * 判断一个磁盘路径对象是否为【文件】
 */
export declare function isFilePath(p: string): Promise<boolean>;
/**
 * 判断一个磁盘路径对象是否为【文件夹】
 */
export declare function isFolderPath(p: string): Promise<boolean>;
/**
 * 获取文件名（包含扩展名），如：test.mp4
 */
export declare function getFileName(p: string): string;
/**
 * 获取文件名（不包含扩展名），如：test
 */
export declare function getFileNameWithoutExt(p: string): string;
/**
 * 获取扩展名（不带点）
 */
export declare function getExtName(p: string): string;
/**
 * 获取文件所在的文件夹路径
 */
export declare function getFileDirPath(p: string): string;
/**
 * 生成一个文件名
 * @param fileNameWithoutExt 该文件的文件名（不包含扩展名）
 * @param extWithoutDot 该文件的扩展名（不包含点）
 * @returns
 */
export declare function createFileName(fileNameWithoutExt: string, extWithoutDot: string): string;
/**
 * 生成一个文件名路径
 * @param dirPath 该文件所在的文件夹路径
 * @param fileNameWithoutExt 该文件的文件名（不包含扩展名）
 * @param extWithoutDot 该文件的扩展名（不包含点）
 */
export declare function createFilePath(dirPath: string, fileNameWithoutExt: string, extWithoutDot: string): string;
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
/**
 * 根据文件路径获取在同一位置唯一的文件路径。如果该路径在磁盘中已经存在，则自动在文件名的末尾追加序号，以保证该文件路径唯一。
 * 如：D:\test\a.jpg、D:\test\a(1).jpg、D:\test\a(2).jpg
 */
export declare function getUniqueFilePath(p: string): string;
//# sourceMappingURL=index.d.ts.map