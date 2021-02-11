export default function ({ route, redirect }) {
  if (route.fullPath === '/useraccount/mylearning') {
    return redirect('/useraccount/mylearning/category')
  }
  // else if (
  //   route.fullPath === '/courses' ||
  //   route.fullPath === '/ru/courses' ||
  //   route.fullPath === '/uz/courses'
  // ) {
  //   return redirect('/')
  // }
}
