<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Questions</title>
</head>
<body>
	<form action="<%=request.getContextPath()%>/QuizController" method='get'>
		<h3>Have fun with NumberQuiz!</h3>
		<p>Your current score is 
		<c:set var = "scored" scope = "session" value="${score}"/>
     	 <c:choose>
         
         <c:when test = "${scored == null}">
            0.
         </c:when>
                
         <c:otherwise>
            <c:out value="${score}" />.
         </c:otherwise>
      	</c:choose>
            	
		 </p>
		<p>Guess the next number in the sequence!</p>
		<p>
		
		<c:set var = "questioned" scope = "session" value="${question}"/>
     	 <c:choose>
         
         <c:when test = "${questioned == null}">
           [3,1,4,1,5,
         </c:when>
                
         <c:otherwise>
            [<c:out value="${question}" /> 
         </c:otherwise>
      	</c:choose>
		
		
		
		
		<font style='color:red'><b> ? </b></font>]</p>
		<p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
		
		<p style='color:red'> <c:out value="${wrong}"/></p>
		<p><input type='submit' name='action' value='Next' />
		 <input type='submit' name='action' value='Restart!' /></p>
	</form>

</body>
</html>