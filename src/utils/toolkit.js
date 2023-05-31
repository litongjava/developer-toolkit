const toolkit = {
  stringMargeToOnLine(input) {
    // 使用正则表达式 /[\n\r\s]+/g 来匹配任何连续的换行和空格。[\n\r\s] 匹配换行符、回车符和空格，+ 匹配一个或多个连续的匹配项，g 表示全局匹配，即匹配整个字符串中的所有匹配项。最后，我们使用字符串的 replace 方法将匹配项替换为空字符串，从而删除它们
    return input.replace(/[\n\r\s]+/g, "");
    //this.outputString= JSON.stringify(this.inputString).replace(/,/g, ",");
  },
  underLineToCame(input) {
    // 使用正则表达式匹配下划线并且后面的字符
    return input.replace(/_([a-z])/g, function (match, letter) {
      // 将匹配到的字符替换成大写字母，并去掉下划线
      return letter.toUpperCase();
    });
  },
  cameToUnderline(input) {
    // 使用正则表达式匹配大写字母
    return input.replace(/([A-Z])/g, function (match, letter) {
      // 将匹配到的大写字母替换成下划线加小写字母
      return "_" + letter.toLowerCase();
    });
  },
  generateSQL(sql, template) {
    template = JSON.parse(template);
    const placeholders = sql.split('?');
    if (placeholders.length - 1 !== template.length) {
      throw new Error('Invalid template');
    }

    let generatedSQL = placeholders[0];
    for (let i = 0; i < template.length; i++) {
      generatedSQL += template[i] + placeholders[i + 1];
    }
    return generatedSQL;
  }
}

export default toolkit;
