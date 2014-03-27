
f = [1, 4]
l = [[1, 2, 4], [2, 3], [1, 3, 4]]


def select_lessons(lessons, filters)
  lessons.select do |lesson|
    puts (lesson & filters == filters)
    lesson & filters == filters
  end
end


