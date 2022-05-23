import fs from "fs-extra"
import path from "path"
import JsKit from "x-js-kit"
import { format as formatUrl } from "url"
import * as rra from "recursive-readdir-async"

/**
 * 判断一个磁盘路径对象是否为【文件】
 */
export async function isFilePath(p: string) {
    if (!p) {
        return false
    }
    try {
        const stat = await fs.stat(p)
        return stat.isFile()
    } catch {
        return false
    }
}

/**
 * 判断一个磁盘路径对象是否为【文件夹】
 */
export async function isFolderPath(p: string) {
    if (!p) {
        return false
    }
    try {
        const stat = await fs.stat(p)
        return !stat.isFile()
    } catch {
        return false
    }
}

/**
 * 获取扩展名（小写不带点）
 */
export function getExtName(p: string) {
    if (!p) {
        return ""
    }
    return JsKit.common.string.lTrimString(path.extname(p) || "", ".").toLowerCase()
}

/**
 * 返回标准的路径
 */
export function getStandardPath(p: string, isFolder: boolean) {
    if (JsKit.common.data.isNullOrWhiteSpace(p)) {
        return ""
    }
    p = p.trim().replaceAll("/", "\\")
    p = JsKit.common.string.rTrimString(p, "\\")
    if (isFolder) {
        return p + "\\"
    }
    return p
}

/**
 * 将文件物理路径转换为 file 协议路径（如果路径中有#号，则也会将其转换为%23，从而避免浏览器加载时报错）
 */
export function convertFilePathToUrl(p: string) {
    return formatUrl({
        pathname: p,
        protocol: "file",
        slashes: true
    })
}

/**
 * 获取指定文件夹路径下的所有文件路径
 */
export async function getFilePathListInFolder(p: string, isRecursion: boolean = true): Promise<string[]> {
    //这里返回的都是文件，不需要通过 isDirectory 筛选
    return (await rra.list(p, { stats: false, ignoreFolders: true, recursive: isRecursion })).map((k: any) => k.fullname) || []
}

/**
 * 获取指定文件夹路径下的所有文件夹路径
 */
export async function getFolderPathListInFolder(p: string, isRecursion: boolean = true): Promise<string[]> {
    return (await rra.list(p, { stats: false, ignoreFolders: false, recursive: isRecursion })).filter((k: any) => k.isDirectory === true).map((k: any) => k.fullname) || []
}
