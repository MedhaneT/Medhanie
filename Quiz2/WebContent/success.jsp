<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Number Quiz</title>
</head>
<body>
<p style='color:red'>Quiz is Over!</p>
<body >
<form action="<%=request.getContextPath()%>/QuizController" method='get'><input type='submit' name='action' value='Restart!' /></form>
</body>
</html>