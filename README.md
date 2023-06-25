# 大连海事大学-国际船舶价格监测系统-大屏展示

## 文件修改

1. 本项目three.js使用`v0.129.0`，后续版本自行比对
  1. 虚线移动修改： big3/big4_2虚线使用的是`three/examples/jsm/lines/LineMaterial`
     ,需要[对源文件](node_modules/three/examples/jsm/lines/LineMaterial.js)进行更改.
    1. 找到`if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX`
       修改为`if ( mod( vLineDistance + dashOffset + elasptime, dashSize + gapSize ) > dashSize ){ diffuseColor.a = 0.; };`
       增加参数，让线段动起来。
    2. 在`#ifdef USE_DASH`外定义`vec4 diffuseColor = vec4(diffuse.rgb, opacity);`
    3. 在`vertexShader`和`fragmentShader`中增加传参`uniform float elasptime;`
    4. 注释掉`vec4 diffuseColor = vec4( diffuse, alpha );` 使用 `//`
    5. 修改`gl_FragColor`的赋值`gl_FragColor = diffuseColor;`
    6. 外部参数配置：
      1. `UniformsLib.line`中增加`elasptime: { value: 0 },`
      2. `constructor`中增加
         ```js 
            elasptime:{
              enumerable:true,
              get: function(){
                return this.uniforms.elasptime.value;
              },
              set: function(value){
                this.uniforms.elasptime.value = value;
              }
            },
         ```
      3. 页面中在`render`中动态使用`matLine.elasptime = elasptime;`
