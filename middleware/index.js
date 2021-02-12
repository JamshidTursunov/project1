export function quizRedirect({ route, redirect }) {
  if (route.fullPath === '/quiz/' || route.fullPath === '/quiz') {
    return redirect('/quiz/subject/')
  }
}

export function instructorPageRedirect({ route, redirect }) {
  if (
    route.fullPath === '/instructor-page/' ||
    route.fullPath === '/instructor-page'
  ) {
    return redirect('/instructor-page/courses')
  } else if (
    route.fullPath === '/ru/instructor-page/' ||
    route.fullPath === '/ru/instructor-page'
  ) {
    return redirect('/ru/instructor-page/courses')
  } else if (
    route.fullPath === '/uz/instructor-page/' ||
    route.fullPath === '/uz/instructor-page'
  ) {
    return redirect('/uz/instructor-page/courses')
  }
}
