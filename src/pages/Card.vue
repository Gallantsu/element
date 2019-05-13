<template>
	<div>
		<el-form ref="tabForm" :model="tabForm"  :rules="rules" label-width="100px">
			<el-form-item label="Tab名称" prop="tabName">
				<el-input  size="small"  class="input-width"  v-model="tabForm.tabName"></el-input>
			</el-form-item>
			<el-form-item label=""> 
				<el-button type="primary" @click="addTab" size="small">添加Tab</el-button>
			</el-form-item>
		</el-form>
		<el-tabs v-model="activeTab" @tab-remove="deleteTab"  type="card" editable>
			<el-tab-pane v-for="(data,index) in tabDatas"  :label="data.label" :name="String(index)" :key="index" ></el-tab-pane>
		</el-tabs>
		<el-dropdown>
			<span>
				下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>1</el-dropdown-item>
				<el-dropdown-item>2</el-dropdown-item>
				<el-dropdown-item>3</el-dropdown-item>
				<el-dropdown-item>4</el-dropdown-item>
				<el-dropdown-item>5</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-button type="primary" size="small" @click="showDialog">点击显示对话</el-button>
		<el-dialog 
		title="提示"
		:append-to-body="true"
		:visible.sync="dialogVisible"
		>
			<span>dsfsfsfs</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				activeTab:"0",
				tabDatas:[
					{label:"账号管理"}
				],
				tabForm:{
					tabName:"",
				},
				rules:{
					tabName:[
						{required:true,message:"请输入Tab名称",trigger:"blur"}
					]
				},
				dialogVisible:false
			}
		},
		methods:{
			addTab(){
				this.$refs["tabForm"].validate((valid) => {
					if(valid){
						let name = this.tabForm.tabName;
						this.tabDatas.push({
							label:name
						});
// 						this.$set(this.tabDatas,this.tabDatas.length,{
// 							label:name
// 						});
					}
				})
			},
			deleteTab(index){
				let activeTab = Number(this.activeTab);
				let idx = Number(index);
				this.tabDatas.splice(idx,1);
				if(activeTab > idx){
					this.activeTab = String(activeTab-1)
				}else if(activeTab == idx){
					this.activeTab = String(activeTab>(this.tabDatas.length-1)?(activeTab-1):activeTab);
				}
			},
			showDialog(){
				this.dialogVisible = true;
			}
		}
	}
</script>

<style lang="scss">
	.el-dropdown-menu{
		width: 100px;
	}
</style>
