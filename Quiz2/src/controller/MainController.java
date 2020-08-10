package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import models.Quiz;



/**
 * Servlet implementation class MainController
 */
@WebServlet({ "/QuizController" })
public class MainController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Quiz sessQuiz = new Quiz();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		String action = request.getParameter("action");
		String ans = request.getParameter("txtAnswer");

		switch(action) {
		case "Next":
			boolean check = sessQuiz.isCorrect(ans);
			if (sessQuiz.getCurrentQuesitionIndex() > 4) {
				
				request.getRequestDispatcher("success.jsp").forward(request, response);
				return;
			}
			request.setAttribute("score", sessQuiz.getNumCorrect());
			request.setAttribute("question", sessQuiz.getQuestions()[sessQuiz.getCurrentQuesitionIndex()]);

			
			if (!check) {
				
				request.getRequestDispatcher("index.jsp").forward(request, response);

			} else {
				request.setAttribute("wrong", "Your last answer was not correct! Please try again");
				request.getRequestDispatcher("index.jsp").forward(request, response);
			}
			break;

		case "Restart!":
			sessQuiz.setIndex();
			request.getRequestDispatcher("index.jsp").forward(request, response);

			break;
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
