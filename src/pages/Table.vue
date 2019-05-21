<template>
	<div>
		<el-form
		ref="useForm"
		:model="userForm"
		:rules="rules"
		label-width="100px"
		labelSuffix=":"
		>	
			<el-form-item label="姓名" prop="name">
				<el-input class="input-width"  size="small" v-model="userForm.name"></el-input>
			</el-form-item>
			<el-form-item label="年龄">
				<el-input-number :min="1" :step="1" :max="150"  size="small" v-model="userForm.age"></el-input-number>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio-group v-model="userForm.gender">
					<el-radio label="男">男</el-radio>
					<el-radio label="女">女</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="户籍">
				<el-select size="small" v-model="userForm.houseHold" placeholder="请选择">
					<el-option value="成都"></el-option>
					<el-option value="南充"></el-option>
					<el-option value="绵阳" ></el-option>
					<el-option value="遂宁" ></el-option>
					<el-option value="广安" ></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="居住过城市">
				<el-checkbox-group 
				v-model="userForm.checkedCities"
				>
					<el-checkbox v-for="city in userForm.city" :label="city" :key="city">{{city}}</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="">
				<el-button type="primary" @click="addTableData" size="small" >保存</el-button>
			</el-form-item>
		</el-form>
		<el-table
		 border
		:data="tableData"
		style="width: 100%">
			<el-table-column
			type="index"
			label="序号"
			width="150"
			prop="name"
			>
			</el-table-column>
			<el-table-column
			prop="name"
			label="姓名"
			>
			</el-table-column>
			<el-table-column
			prop="age"
			label="年龄"
			>
			</el-table-column>
			<el-table-column
			prop="gender"
			label="性别">
			</el-table-column>
			<el-table-column
			prop="houseHold"
			label="户籍">
			</el-table-column>
			<el-table-column
			prop="checkedCities"
			:formatter="citiesString"
			label="居住过城市">
			</el-table-column>
			<el-table-column
			align="center"
			label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.$row)" >
						<i class="el-icon-delete"></i>
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination 
		:page-size="page.pageSize" 
		layout="total,sizes,prev,pager,next,jumper" 
		:total="pageTotal" 
		:current-page="page.currentPage"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
		></el-pagination>
		 <el-date-picker
			v-model="value9"
			type="date">
		</el-date-picker>
	</div>
</template>

<script>
	import { ADD_TABLEDATA, DELETE_TABLEDATA } from '@/store/index.js'
	export default {
		data(){
			const checkName = (rule,value,callback)=>{
				console.log(rule);
				if(/\s+/.test(value)){
					callback("姓名中不能包含空格！");
				}else{
					callback();
				}
				
			}
			return {
				userForm:{
					name:"",
					age:"",
					houseHold:"",
					gender:"男",
					city:["广东","上海","北京","西安","成都"],
					checkedCities:["广东"]
				},
				page:{
					currentPage:1,
					pageSize:10
				},
				rules:{
					name:[
						{required:true,message:"请输入用户名",trigger:"blur"},
						{validator:checkName,trigger:"blur"},
					]
				},
				value9:"2019-1-1"
			}
		},
		computed:{
			tableData(){
				const datas = this.$store.state.table.tableData;
				const tableDatas = datas.slice((this.page.currentPage-1)*this.page.pageSize,(this.page.currentPage)*this.page.pageSize);
				return tableDatas;
			},
			pageTotal(){
				return this.$store.state.table.tableData.length;
			}
		},
		methods:{
			addTableData(){
				this.$refs["useForm"].validate((valid)=>{
					if(valid){
						this.$confirm("你确定需要添加这条数据","提示",{
							confirmButtonText:"确定",
							cancelButtonText:"取消"
						}).then(()=>{
							this.$store.commit(ADD_TABLEDATA,{
								name:this.userForm.name,
								age:this.userForm.age,
								houseHold:this.userForm.houseHold,
								gender:this.userForm.gender,
								checkedCities:this.userForm.checkedCities
							});
							this.$message({
								type:'success',
								message:'配置成功'
							})
						}).catch(()=>{
							this.$message({
								type:'success',
								message:'取消配置'
							})
						})
						
					}
				})
			},
			citiesString(row,col,cellValue){
				return cellValue.join(",");
			},
			handleDelete(index,row){
				this.$store.commit(DELETE_TABLEDATA,index);
			},
			handleSizeChange(val){
				this.page.pageSize = val;
			},
			handleCurrentChange(val){
				this.page.currentPage = val;
			},
		}
	}
</script>

<style lang="scss">
	.el-form{
	}
</style>
