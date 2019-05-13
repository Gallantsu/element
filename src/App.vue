<template>
	<el-container class="tac">
			<el-header>Header</el-header>
			<el-container>
					<el-aside class="sider" width="300px">
						<Menu></Menu>
					</el-aside>
					<el-main>
						<Tab></Tab>
						<div class="content">
							<router-view></router-view>
						</div>
					</el-main>
			</el-container>
	</el-container>
</template>

<script>
	import Menu from '@/components/Menu.vue'
	import Tab from '@/components/Tab.vue'
	export default {
		name: 'App',
		data(){
			return {
				activeMenu:"1",
				activeSubMenu:"1"
			}
		},
		components:{
			Menu,
			Tab
		}
	}
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}
	.tac{
		height: 100%;
	}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
	.sider{
		position: fixed;
		top:60px;
		bottom:0px;
		overflow-y: auto;
	}
	.el-main{
		position: fixed;
		top:60px;
		left: 300px;
		right: 0px;
		bottom:0px;
		padding: 0px;
		background-color: #eaeaea;
		overflow-y: auto;
	}
	.input-width{
		width: 215px;
	}
	.el-form-item{
		height: 32px;
		line-height: 32px;
	}
	.is-required:before{
		content:"" !important;
	}
  .content{
		margin: 5px;
		padding: 20px;
		background-color: white;
	}
 
</style>
