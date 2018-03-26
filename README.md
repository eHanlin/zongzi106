# zongzi106

## 考運活動簡訊 API
1. 僅支援 HTTP POST 方法
2. 參數
	- name (姓名)
	- mobile (手機)
	- gift (禮物序號)

使用 jQuery 範例如下
```javascript
var url = "https://wa74g5em51.execute-api.ap-northeast-1.amazonaws.com/prod/ms-zongzi"
var body = {name: "R", gift: 1, mobile: "0952716990"}
$.post(url, JSON.stringify(body), function(resp) {console.log(resp)})
/* console output: 
{
    "data":{
        "name":"rodick",
        "mobile":"0952716990",
        "gift":5
    },
    "message-request":"d3e2ba3c-4875-480c-ad36-4a297be45eff"
}
*/
