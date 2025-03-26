<script setup lang="ts">
import VanResult from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    slot: '插槽用法',
  },
  'en-US': {
    slot: 'slotUsage',
  },
});
</script>

<template>
  <div style="padding-left: 14px">
    <demo-block :title="t('basicUsage')">
      <div>
        <van-result type="success" />
        <van-result type="fail" />
      </div>
      <div class="demo-result">
        <van-result type="fail" text-color="#FF5F4E" inline />
      </div>
      <div class="demo-result">
        <van-result
          type="success"
          tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
          text-color="#00982D"
          inline
        />
      </div>
      <div class="demo-result">
        <van-result
          type="fail"
          tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
          text-color="#FF5F4E"
          inline
        />
      </div>
      <div class="demo-result">
        <van-result
          icon="star"
          color="#dfec12"
          tip="提示提示提示提示提示提示提示提示"
          title="标题"
        />
      </div>
    </demo-block>
    <demo-block :title="t('slot')">
      <div class="demo-result">
        <van-result type="success">
          <p class="margin-top8 font-size0 van-color-text-assist line-height20">
            提示文字
            <span class="van-color-warning">重点内容</span> 等等等
          </p>
        </van-result>
      </div>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-result {
  margin-top: 15px;
}
</style>
