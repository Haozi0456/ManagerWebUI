<style lang="less">
    .card-container {
        cursor: pointer;
        height: auto !important;
        padding: 5px 8px;
        /*border: 1px solid #dcdcdc;*/
    }

    .item-title-text {
        font-size: 14px;
        font-weight: 400;
        color: #464c5b;
        width: 100%;
    }

    .item-text-lable {
        font-size: 20px;
        color: #2d8cf0;
        font-weight: bold;
        width: 100%;
        height: 30px;
    }
    .item-unit{
        font-size: 14px;
        color: #2d8cf0;
        font-weight: bold;
        margin-left: 4px;
    }

</style>

<template>
    <div class="card-container" :style="{width:containerWidth, color: 'white'}" :id="idName">
        <Row type="flex" align="middle">
            <div class="item-title-text" :style="{fontWeight:titleWeight}">{{title}}</div>
            <div class="item-text-lable" :style="{color: textColor, fontWeight:textWeight}">{{textLable}}<span class="item-unit">{{unit}}</span></div>
        </Row>
    </div>
</template>

<script>
export default {
  name: 'infoItem',
  props: {
    idName: String,
    decimals: {
      type: Number,
      default: 2
    },
    unit: String,
    textColor: {
      type: String,
      default: '#2d8cf0'
    },
    textLable: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleSize: {
      type: String,
      default: '14px'
    },
    titleWeight: {
      type: Number,
      default: 600
    },
    textSize: {
      type: String,
      default: '20px'
    },
    textWeight: {
      type: Number,
      default: 600
    },
    containerWidth: {
      type: String,
      default: '120px'
    }
  }
}
</script>

<style scoped>

</style>
