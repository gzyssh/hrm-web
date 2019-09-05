import {createAPI} from '@/utils/request'
//查询部门列表
export const list = data => createAPI('/company/departments', 'get', data);
//保存部门
export const save = data => createAPI('/company/departments', 'post', data);
//根据Id查询部门
export const detail = data => createAPI(`/company/departments/${data.id}`, 'get', data);
//根据Id删除部门
export const deleteById = data => createAPI(`/company/departments/${data.id}`, 'delete', data);
//根据Id更新部门
export const update = data => createAPI(`/company/departments/${data.id}`, 'put', data);
//保存或更新方法
export const saveOrUpdate = data =>{return data.id?update(data):save(data)};
