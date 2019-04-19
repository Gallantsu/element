<template>
	<el-container class="tac">
			<el-header>Header</el-header>
			<el-container>
					<el-aside class="sider" width="200px">
						<Menu></Menu>
					</el-aside>
					<el-main>Main</el-main>
			</el-container>
	</el-container>
</template>

<script>
	import Menu from '@/components/Menu.vue'
export default {
  name: 'App',
	data(){
		return {
			activeMenu:"1",
			activeSubMenu:"1"
		}
	},
	components:{
		Menu
	}
}
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
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
		position: relative;
	}
  
 
</style>
