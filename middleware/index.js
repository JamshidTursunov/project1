export function quizRedirect({ route, redirect }) {
  if (route.fullPath === '/quiz/' || route.fullPath === '/quiz') {
    return redirect('/quiz/subject/')
  }
}
