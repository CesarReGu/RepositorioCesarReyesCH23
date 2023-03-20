-- USE generation;

SELECT * FROM students;
SELECT * FROM countries;
-- Encontrar pais al que pertenecen
SELECT
    students.*,
    countries.name,
    countries.code
FROM students
INNER JOIN countries
ON students.nationality = countries.idCountries;

-- INNER JOIN sencillo
SELECT students.name, 
students.last_name,countries.Name AS "country", 
countries.Code  
FROM students
INNER JOIN countries 
ON countries.idCountries = students.nationality;

-- Encontrar que tipo de ID tienen

SELECT
students.idStudent AS "ID",
students.name AS  "Name",
students.last_name AS "Last name",
idtypes.name AS 'Tipo de registro'
FROM students
INNER JOIN idtypes
ON idtypes.id_idTypes = students.IdType_id;
-- Abreviaciones
SELECT 
    t1.name,
    t2.name,
    t2.code
FROM students t1
INNER JOIN countries t2
ON t1.nationality = t2.idCountries;

-- Buscar estudiantes y el curso al que pertenecen
SELECT 
    t1.name AS 'Nombre',
    t1.last_name AS 'Apellido',
    t2.course_code AS 'Codigo de curso',
    t3.name AS 'Curso',
    t3.credits
FROM students t1
INNER JOIN courses_has_students t2
ON t1.idStudent = t2.students_id_student
INNER JOIN courses t3
ON t2.course_code = t3.code;

SELECT 
t1.course_code AS 'Codigo de curso',
t2.code AS 'Codigo de curso',
t2.name AS 'Curso'
FROM courses_has_students t1
INNER JOIN courses t2
ON t1.course_code = t2.code
GROUP BY t2.code;

-- Encontrar estudiantes que sean del pais 125
SELECT * FROM students WHERE nationality = 125;

-- Contar estudiantes que pertenezcan al curso JAVA-1
SELECT COUNT(*) AS 'Numero de estudiantes' FROM courses_has_students WHERE course_code = 'JAVA-1';

-- Encontrar estudiantes por cada modulo 
SELECT modules.code AS 'Codigo de modulo', COUNT(*) AS 'Numero de estudiantes'
FROM modules
INNER JOIN courses
ON modules.code = courses.module_code
INNER JOIN courses_has_students
ON courses.code = courses_has_students.course_code
GROUP BY modules.code;

-- Estudiantes sin curso
SELECT *
FROM students e
LEFT JOIN courses_has_students c ON e.idStudent = c.students_id_student
WHERE c.course_code IS NULL;

-- Pruebas
SELECT COUNT(DISTINCT idStudent) AS 'Cantidad de nombres diferentes'
FROM students;
SELECT * FROM STUDENTS;
SELECT * FROM courses_has_students;





