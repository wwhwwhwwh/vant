<script setup lang="ts">
import VanAvatar from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    max: '最大值',
    standalone: '独立展示',
    customColor: '自定义颜色',
    customContent: '自定义徽标内容',
    customPosition: '自定义徽标位置',
  },
  'en-US': {
    max: 'Max',
    standalone: 'Standalone',
    customColor: 'Custom Color',
    customContent: 'Custom Content',
    customPosition: 'Custom Position',
  },
});
</script>

<template>
  <div style="padding-left: 14px">
    <demo-block :title="t('basicUsage')">
      <div class="demo-avatar">
        <van-avatar :figure="2" size="100" :radius="4" />
      </div>
      <div class="demo-avatar">
        <van-avatar :figure="5" size="100" round />
      </div>
      <div class="demo-avatar">
        <van-avatar :figure="17" size="100" round />
      </div>
      <div class="demo-avatar">
        <van-avatar :figure="18" size="100" round />
      </div>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-avatar {
  display: inline-block;
}
</style>
