var todoApp = angular.module('todoApp',[]);

var model = {
	user:"Gal"
};

todoApp.run(function($http){   // Get Json data (todo.run = onLoad)
	$http.get("http://localhost:3000/ws_todo/getActionsData").success(function(data){
		model.items = data;
	})
})

todoApp.run(function($http){   // Get Json data (todo.run = onLoad)
	$http.get("http://localhost:3000/ws_todo/getDesignersNames").success(function(data){
		model.designers = data;
	})
})

todoApp.run(function($http){   // Get Json data (todo.run = onLoad)
	$http.get("http://localhost:3000/ws_todo/getDesignerProducts").success(function(data){
		model.products = data;
	})
})



todoApp.filter("checkedItems", function(){
	return function(items, showComplete){
		var resultArr = [];
		angular.forEach(items, function(item){
			//if(item.done==false || showComplete==true){
				resultArr.push(item);
			//};
		});
		return resultArr;
	};
});

todoApp.filter("designerItems", function(){
	return function(items, designer){
		var resultArr = [];
		angular.forEach(items, function(item){
			if(item.designer==designer){
				resultArr.push(item);
			};
		});
		return resultArr;
	};
});

todoApp.filter("designerItems2", function(brand){
	return function(items, designer){
		var resultArr = [];
		angular.forEach(items, function(item){
			if(item.designer==brand){
				resultArr.push(item);
			};
		});
		return resultArr;
	};
});


todoApp.controller('ToDoCtrl', function($scope){
	$scope.todo = model;

	$scope.incompleteCount = function(){
		var count = 0;
		angular.forEach($scope.todo.items, function(item){
			if(item.done) { count++ }
		});
		return count;
	};
	$scope.warningLevel = function(){
		return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
	};
	$scope.addNewItem = function(productName, productPrice, productDesigner, productImg){
		$scope.todo.items.push({ name:productName, price:productPrice, img_url:productImg, designer:productDesigner, like_counter:0, new:true  });
		//window.open("http://localhost:3000/ws_todo/saveActionsData");
	}
	$scope.addNewDesigner = function(designerName, designerMail, productDesigner, productImg){
		$scope.todo.designers.push({ name:designerName, email:designerMail, designer:productDesigner, like_counter:0, new:true  });
	}
})


// app.controller('firstController', function ($scope) {
// 		$scope.first= 'Ragnar';
// 		$scope.last= 'Lodbrok';
// 		$scope.heading= "The king's message: ";

// 		$scope.updateMsg= function() {
// 			$scope.msg= "Hello, "+ $scope.first+ " " + $scope.last;
// 		};
// 	});
