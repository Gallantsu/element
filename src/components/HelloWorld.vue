<template>
<div>
  <el-table
    :data="dataLine"
    style="width: 100%"
    >
    <el-table-column
      prop="date"
      label="日期"
      width="300">
       <template slot-scope="scope">
         <span>
            <dy-com :num="0" :name="scope.row" :val="tableData[0][scope.row]"></dy-com> 
          </span>
        <!--<span >{{ tableData[0][scope.row] }}</span>-->
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="300">
      <template slot-scope="scope">
        <span >{{ tableData[1][scope.row] }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
      <template slot-scope="scope">
        <span >{{ tableData[2][scope.row] }}</span>
      </template>
    </el-table-column>
    
  </el-table>
  <div>{{date0}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        dataLine:["date","name","address"],
        date0:"1111"
      }
    },
    methods: {
     
    },
    components:{
      'dy-com':{
        functional:true,
        props:{
          num:{
            type:Number,
            require:true
          },
          name:{
            type:String,
            require:true
          },
          val:[String]
        },
        render(createEle,context){
          function getComponet(){
            if(context.props.name == 'date'){
              return "el-date-picker"
            }
          }
          return createEle(getComponet(),{
            on:{
              input:function(val){
                context.parent[context.props.name+context.props.num] = val;
              }
            },
            attrs:{
              value:context.props.val,
              type:'date',
              placeholder:"选择日期"
            }
          },context.children);
        }
      }
    }
  }
</script>