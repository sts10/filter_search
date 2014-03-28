
f = [1, 4]
l = [[1, 2, 4], [2, 3], [1, 3, 4]]


def select_lessons_by_filters(lessons, filters)
  lessons.select do |lesson|
    lesson & filters == filters
  end
end


