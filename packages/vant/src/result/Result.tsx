import { defineComponent, computed } from 'vue';
import { createNamespace } from '../utils';
import Icon from '../icon';

const [name, bem] = createNamespace('result');

export const resultProps = {
  type: String,
  inline: Boolean,
  icon: String,
  title: String,
  tip: String,
  color: String,
  textColor: String,
};

export default defineComponent({
  name,
  props: resultProps,
  setup(props, { slots }) {
    const { icon, type, tip, color, title, inline, textColor } = props;

    const genIcon = computed(() => {
      return (
        icon ||
        (type === 'fail' ? 'warning' : type === 'success' ? 'checked' : '')
      );
    });

    const genIconColor = computed(() => {
      return (
        color ||
        (type === 'fail' ? '#ff5f4e' : type === 'success' ? '#32AE57' : '')
      );
    });
    const genTitle = computed(() => {
      return (
        title ||
        (type === 'fail' ? '操作失败' : type === 'success' ? '操作成功' : '')
      );
    });
    return () => {
      return (
        <div class={[bem({ inline }), 'van-clearfix']}>
          {slots.icon ? (
            slots.icon()
          ) : (
            <Icon
              class={bem('icon')}
              name={genIcon.value}
              color={genIconColor.value}
            />
          )}
          <div class={bem('title')} style={{ color: textColor }}>
            {genTitle.value}
          </div>
          {tip ? (
            <div class={[bem('tip', 'van-multi-ellipsis--l2')]}>{tip}</div>
          ) : (
            slots.default?.()
          )}
        </div>
      );
    };
  },
});
