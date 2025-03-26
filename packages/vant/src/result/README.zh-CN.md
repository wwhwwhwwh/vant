# Result 结果

### 介绍

实现观看视频时弹出的评论性字幕功能。请升级 `vant` 到 >= 4.4.0 版本来使用该组件。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Result } from 'vant';

const app = createApp();
app.use(Result);
```

## 代码演示

### 基础用法

```html
<van-result type="success" />
<van-result
  type="fail"
  tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
/>
```

```ts

```
