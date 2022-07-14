/**
 * @type {import('postcss').PluginCreator}
 * opts 参数是插件的配置项
 * 该函数的返回值最终会被 postcss.plugin() 注册为一个插件
 */
 module.exports = (opts = {}) => {

  return {
    // 插件名
    postcssPlugin: "postcss-plugin-wywppkd4test",

    /**
     * 这个钩子遍历所有大部分CSS属性(如background, color, font-size, etc.)
     * 其他特殊属性如 `@`开头的属性需要用 AtRule 钩子处理
     * @returns 
     */
    Declaration(decl, postcss) {
      // 避免插件重复执行
      if(decl.value.indexOf("rem") > -1) return

      // 将px单位替换为rem
      if(decl.value && decl.value.indexOf("px") > -1){
          const newVal = decl.value.replace(/px/g, "rem")
          decl.value = newVal
      }
    },

    /*
    Declaration: {
      // 查询更快: 如果你知道确切要改的属性名, 可以直接用属性名作为方法名, 这样查询效率更高
      color: (decl, postcss) {
        // 只处理 color 属性
      }
    }
    */
  };
};

module.exports.postcss = true;