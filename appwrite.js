const APPWRITE_ENDPOINT='https://nyc.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID='6b01e299000b19ac36ce';
const DATABASE_ID='6b01e350001ca47807e5';
const TABLES={profiles:'profiles',settings:'6b01e569002a228a1c5b',transactions:'6b073550002f83558732',goals:'6b01e8700035f839daea',accounts:'6b01fc9a00179915f55c',categories:'6b01fd500025ac427542',bills:'6b07370d00009dc4076e',cards:'6b073783002f04caddfa'};
const client=new Appwrite.Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);
const account=new Appwrite.Account(client),tablesDB=new Appwrite.TablesDB(client),ID=Appwrite.ID,Query=Appwrite.Query,Permission=Appwrite.Permission,Role=Appwrite.Role;
async function currentUser(){try{return await account.get()}catch(_){return null}}
function rowPermissions(userId){return [Permission.read(Role.user(userId)),Permission.update(Role.user(userId)),Permission.delete(Role.user(userId))]}
async function listUserRows(tableId,userId){return (await tablesDB.listRows({databaseId:DATABASE_ID,tableId,queries:[Query.equal('user_id',userId),Query.limit(5000)]})).rows}
async function getRow(tableId,rowId){return tablesDB.getRow({databaseId:DATABASE_ID,tableId,rowId})}
async function createRow(tableId,data,userId,rowId=ID.unique()){return tablesDB.createRow({databaseId:DATABASE_ID,tableId,rowId,data:{...data,user_id:userId},permissions:rowPermissions(userId)})}
async function updateRow(tableId,rowId,data){return tablesDB.updateRow({databaseId:DATABASE_ID,tableId,rowId,data})}
async function deleteRow(tableId,rowId){return tablesDB.deleteRow({databaseId:DATABASE_ID,tableId,rowId})}
window.OFAppwrite={client,account,tablesDB,ID,Query,TABLES,currentUser,getRow,createRow,updateRow,deleteRow,listUserRows};
