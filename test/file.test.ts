import JsServer from "../dist/index"


test("index", () => {
    const p1 = "C:\\Users\\Administrator\\Desktop\\abc.123.mp4"
    const p2 = "C:\\Users\\Administrator\\Desktop\\.mp4"
    const p3 = "C:\\Users\\Administrator\\Desktop\\abc"
    const p4 = "C:\\Users\\Administrator\\Desktop\\ABC.MP4"

    expect(JsServer.file.getFileName(p1)).toBe("abc.123.mp4")
    expect(JsServer.file.getFileName(p2)).toBe(".mp4")
    expect(JsServer.file.getFileName(p3)).toBe("abc")
    expect(JsServer.file.getFileName(p4)).toBe("ABC.MP4")

    expect(JsServer.file.getFileNameWithoutExt(p1)).toBe("abc.123")
    expect(JsServer.file.getFileNameWithoutExt(p2)).toBe("")
    expect(JsServer.file.getFileNameWithoutExt(p3)).toBe("abc")
    expect(JsServer.file.getFileNameWithoutExt(p4)).toBe("ABC")

    expect(JsServer.file.getExtName(p1)).toBe("mp4")
    expect(JsServer.file.getExtName(p2)).toBe("mp4")
    expect(JsServer.file.getExtName(p3)).toBe("")
    expect(JsServer.file.getExtName(p4)).toBe("MP4")

    expect(JsServer.file.getFileDirPath(p1)).toBe("C:\\Users\\Administrator\\Desktop")
    expect(JsServer.file.getFileDirPath(p2)).toBe("C:\\Users\\Administrator\\Desktop")
    expect(JsServer.file.getFileDirPath(p3)).toBe("C:\\Users\\Administrator\\Desktop")
    expect(JsServer.file.getFileDirPath(p4)).toBe("C:\\Users\\Administrator\\Desktop")

    expect(JsServer.file.createFileName("abc", "")).toBe("abc")
    expect(JsServer.file.createFileName("abc", "123")).toBe("abc.123")

    expect(JsServer.file.createFilePath("C:\\test\\", "abc", "")).toBe("C:\\test\\abc")
    expect(JsServer.file.createFilePath("C:\\test\\", "abc", "123")).toBe("C:\\test\\abc.123")

})
