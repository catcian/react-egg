export default function (rowData, filename='file') {
  // 允许字符
  if (Object.prototype.toString.call(rowData) === '[object String]') {
    const rowArr = rowData.split(',')
    // 返回 解码后的 字符串
    const decondeStr = window.atob(rowArr[1])

    let n = decondeStr.length

    // 创建 8位无符号整型数组
    const u8Arr = new Uint8Array(n)

    // 存入数据
    while(n--) {
      // charCodeAt 指定下标 字符 unicode 编码
      u8Arr[n] = decondeStr.charCodeAt(n)
    }

    // mime 类型
    const mime = rowArr[0].match(/:(.*?);/)[1];
    // 后缀名
    const extname = mime.split('/')[1] 

    return new File([u8Arr], `${filename}.${extname}`, {
      type: mime
    })
  }
}