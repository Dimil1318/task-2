(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(arr) {
       // var arr = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];
var one = [-1];

var two = [];

var k = 0;//количество островов


for (let i=0; i<arr.length; i++) {
	for (let j=0; j <arr[1].length; j++) {
		
			
		    
			if ( (arr[i][j] == 1) && (one.indexOf(i+""+j)<0)) {
			

			k++;
one.push(i+""+j);
two.push(i+""+j);
  Smile(i,j)       
			
		

			}  
        
	}	
}	


function Smile(varI,varJ) {
				var arrIsland = [  [varI- 1, varJ],[varI , varJ -1],[varI , varJ +1], [varI + 1, varJ] ];
var iDec1 = varI-1;
var iInc1 = varI+1;
var jDec1 = varJ-1;
var jInc1 = varJ+1;
//333333
if ((varI >= 0) && (varJ+1 >= 0)&& (varI < arr.length) && (varJ+1 < arr[1].length)){
							if (arr[varI][varJ+1] != undefined){

if (arr[varI][varJ+1] == 1) {
						

								
									if ((one.indexOf(varI+""+jInc1)<0)){
									
							
									
									one.push(varI+""+jInc1);
									Smile(varI,varJ+1);			
								
									}

								}

							

						}

					}
		//1111			
if ((varI- 1 >= 0) && (varJ >= 0)&& (varI- 1 < arr.length) && (varJ < arr[1].length)){
							if (arr[varI- 1][varJ] != undefined){

if (arr[varI- 1][varJ] == 1) {
						

								

									if ((one.indexOf(iDec1+""+varJ)<0)){
									
									
									one.push(iDec1+""+varJ);
									Smile(varI-1,varJ);			
								
									}

								}

							

						}

					}



//22222
if ((varI >= 0) && (varJ-1 >= 0)&& (varI < arr.length) && (varJ-1 < arr[1].length)){
							if (arr[varI][varJ-1] != undefined){

if (arr[varI][varJ-1] == 1) {
						

								
									if ((one.indexOf(varI+""+jDec1)<0)){
									
								
									
									one.push(varI+""+jDec1);
									Smile(varI,varJ-1);			
								
									}

								}

							

						}

					}

//444444

if ((varI+1 >= 0) && (varJ >= 0)&& (varI+ 1 < arr.length) && (varJ < arr[1].length)){
							if (arr[varI+ 1][varJ] != undefined){

if (arr[varI+ 1][varJ] == 1) {
						

								
									if ((one.indexOf(iInc1+""+varJ)<0)){
									
								
									
									one.push(iInc1+""+varJ);
									Smile(varI+1,varJ);			
							
									}

								

							}

						}

					}




	
				 }
		return k;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
