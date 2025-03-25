import { defineComponent } from 'vue';
import { addUnit, createNamespace } from '../utils';

const [name, bem] = createNamespace('avatar');

export const avatarProps = {
  figure: {
    type: [Number, String],
    default: 1,
  },
  size: [Number, String],
  round: Boolean,
  background: String,
  radius: [Number, String],
};

export default defineComponent({
  name,
  props: avatarProps,
  setup(props) {
    const { size, round, background, figure, radius } = props;

    const genFigure = (): string => {
      if (typeof figure === 'number') {
        return 'http://mui.ucmed.cn/images/default/avatar' + figure + '.png';
      }
      return figure;
    };

    const contentStyle = {
      width: addUnit(size),
      height: addUnit(size),
      borderRadius: addUnit(radius),
      background: background,
    };
    return () => {
      return (
        <div class={bem({ round: round })}>
          {/* {slots.default?.()} */}
          <img src={genFigure()} style={contentStyle} />
        </div>
      );
    };
  },
});
