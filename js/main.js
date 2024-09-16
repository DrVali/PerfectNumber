  const perfectNumbers =[];

  function isPerfectNumber(n) {
	let count=0;
    if( n > 0){	 
	        for( let i=1 ; i <= (n/2); i++)
			      {
		                 if( n%i === 0)
						       {
		   	                     count += i;
		                       }
	              }
	           if ( count === n)
	              {
		               perfectNumbers.push(n);
	              }
		   
	            else
		              console.log(n + "  is not a perfect Number");
	          }
	 else
	        alert("please insert a positive Number");
    }
	isPerfectNumber(23);
	isPerfectNumber(6);
	isPerfectNumber(24);
	isPerfectNumber(61);
	isPerfectNumber(28);
	alert( "perfect numbers in array are " + perfectNumbers);
	 console.log(perfectNumbers);
