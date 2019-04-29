export const ADD_TABLEDATA = 'ADD_TABLEDATA'
export const DELETE_TABLEDATA = 'DELETE_TABLEDATA'


const table = {
	state:{
		tableData:[]
	},
	mutations:{
		[ADD_TABLEDATA](state,val){
			state.tableData.push(val);
		},
		[DELETE_TABLEDATA](state,index){
			state.tableData.splice(index,1);
		}
	}
}

const store = {
	state:{
		menuData:[
			{
				text:"模板管理",
				router:"/table",
				subMenu:[
					{text:"表单",router:'/form'},
					{text:"表格",router:'/table'},
					{text:"卡片",router:'/card'},
					{text:"走马灯",router:'/couns'}
				]
			}
		],
		tabArray:[
			{text:"表单",router:"/form"}
		]
	},
	getters:{
		
	},
	mutations:{
		
	},
	actions:{
		
	},
	modules:{
		table
	}
}

export default store


