<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>
<script>
export default {
  // props: ["url"]
  // props: {
  //   url: string,//url属性必须是一个字符串
  // }

  props: {
    url: {
      type: String, //url属性必须是一个字符串
      required: true, //属性必须传递
    },
    size: {
      type: Number,
      default: 100, //尺寸默认值
    },
  },
};
</script>

<style scoped>
/* scoped形成一个作用域的样式*/
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>