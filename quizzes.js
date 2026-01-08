// Add this to the bottom of scripts.js or in a separate quizzes.js file

const javaQuizzes = {
  quiz1: [ // Beginner
    { question: "What is the size of an int variable in Java?", options: ["4 bytes", "2 bytes", "8 bytes", "Depends on the system"], answer: "4 bytes" },
    { question: "Which of these is a valid keyword in Java?", options: ["interface", "unsigned", "friend", "sizeof"], answer: "interface" },
    { question: "Which company developed Java?", options: ["Sun Microsystems", "Microsoft", "Apple", "Google"], answer: "Sun Microsystems" },
    { question: "What is the extension of Java bytecode files?", options: [".java", ".class", ".exe", ".jar"], answer: ".class" },
    { question: "Which symbol is used to denote a block of code in Java?", options: ["{}", "()", "[]", "<>"], answer: "{}" },
    { question: "Java is a ___ language.", options: ["Procedural", "Functional", "Object-Oriented", "Scripting"], answer: "Object-Oriented" },
    { question: "Which of the following is a primitive type?", options: ["int", "String", "Integer", "Object"], answer: "int" },
    { question: "Which of these is not a Java feature?", options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"], answer: "Use of pointers" },
    { question: "What is the default value of a boolean variable?", options: ["true", "false", "0", "null"], answer: "false" },
    { question: "What is JVM?", options: ["Java Variable Machine", "Java Virtual Machine", "Java Verified Machine", "None"], answer: "Java Virtual Machine" },
    { question: "What is the output of: System.out.println(1 + 2 + \"3\")?", options: ["33", "123", "6", "33.0"], answer: "33" },
    { question: "Which package contains the Scanner class?", options: ["java.util", "java.io", "java.lang", "java.net"], answer: "java.util" },
    { question: "Which keyword is used to define a class in Java?", options: ["class", "Class", "define", "struct"], answer: "class" },
    { question: "Which method is used to start a thread in Java?", options: ["start()", "run()", "execute()", "init()"], answer: "start()" },
    { question: "Which access modifier makes a member visible to all classes?", options: ["public", "private", "protected", "default"], answer: "public" },
    { question: "Which loop is guaranteed to execute at least once?", options: ["do-while", "while", "for", "foreach"], answer: "do-while" },
    { question: "Which data type is used to store characters?", options: ["char", "String", "Character", "byte"], answer: "char" },
    { question: "Which keyword is used to inherit a class?", options: ["extends", "implements", "inherits", "super"], answer: "extends" },
    { question: "Which exception is thrown when an array is accessed out of bounds?", options: ["ArrayIndexOutOfBoundsException", "IndexOutOfRangeException", "NullPointerException", "IllegalAccessException"], answer: "ArrayIndexOutOfBoundsException" },
    { question: "What is the full form of API?", options: ["Application Programming Interface", "Application Protocol Interface", "Applied Programming Interface", "Advanced Programming Interface"], answer: "Application Programming Interface" }
  ],

  quiz2: [ // Basic
    { question: "Which method is the entry point for a Java program?", options: ["main()", "start()", "run()", "init()"], answer: "main()" },
    { question: "Which keyword is used to prevent inheritance?", options: ["final", "static", "private", "abstract"], answer: "final" },
    { question: "Which operator is used to compare two values?", options: ["==", "=", "!=", "equals"], answer: "==" },
    { question: "Which data type has the largest range?", options: ["long", "int", "double", "float"], answer: "double" },
    { question: "Which keyword is used to handle exceptions?", options: ["try", "catch", "throw", "All of the above"], answer: "All of the above" },
    { question: "Which class is the superclass of all classes?", options: ["Object", "Class", "System", "Main"], answer: "Object" },
    { question: "Which loop is used for definite iteration?", options: ["for", "while", "do-while", "infinite loop"], answer: "for" },
    { question: "What does the break statement do?", options: ["Exits a loop or switch", "Skips one iteration", "Ends method", "Throws error"], answer: "Exits a loop or switch" },
    { question: "What is the size of a char in Java?", options: ["2 bytes", "1 byte", "4 bytes", "Depends"], answer: "2 bytes" },
    { question: "Which keyword is used to create an object?", options: ["new", "class", "this", "super"], answer: "new" },
    { question: "Which keyword refers to the current class object?", options: ["this", "that", "self", "current"], answer: "this" },
    { question: "Which statement is used to import packages?", options: ["import", "include", "package", "require"], answer: "import" },
    { question: "How do you create a constant in Java?", options: ["final", "const", "static", "immutable"], answer: "final" },
    { question: "Which operator is used for logical AND?", options: ["&&", "||", "&", "|"], answer: "&&" },
    { question: "Which block always executes in exception handling?", options: ["finally", "catch", "try", "throw"], answer: "finally" },
    { question: "Which method returns the length of a string?", options: ["length()", "size()", "getLength()", "len()"], answer: "length()" },
    { question: "Which operator is used for string concatenation?", options: ["+", "&", "*", "%"], answer: "+" },
    { question: "What is the default value of int?", options: ["0", "null", "undefined", "NaN"], answer: "0" },
    { question: "What type of language is Java?", options: ["Compiled and Interpreted", "Only Interpreted", "Only Compiled", "None"], answer: "Compiled and Interpreted" },
    { question: "Which method is used to start a thread?", options: ["start()", "run()", "execute()", "begin()"], answer: "start()" }
  ],
   quiz3: [ // Intermediate
    { question: "What is method overloading in Java?", options: ["Using same method name with different parameters", "Using same method name in different classes", "Same method name with same parameters", "Using methods from parent class"], answer: "Using same method name with different parameters" },
    { question: "Which of these is not part of OOP in Java?", options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"], answer: "Compilation" },
    { question: "Which class is used to take input from user in Java?", options: ["Scanner", "BufferReader", "InputStream", "Console"], answer: "Scanner" },
    { question: "Which keyword is used to create an abstract class?", options: ["abstract", "interface", "virtual", "extends"], answer: "abstract" },
    { question: "Which collection does not allow duplicates?", options: ["Set", "List", "Map", "ArrayList"], answer: "Set" },
    { question: "What is the purpose of the 'super' keyword?", options: ["Access parent class members", "Refer to current object", "Call static methods", "None"], answer: "Access parent class members" },
    { question: "Which interface is used to sort a collection?", options: ["Comparable", "Comparator", "Sorter", "Orderable"], answer: "Comparable" },
    { question: "What does the 'this' keyword refer to?", options: ["Current class instance", "Superclass", "Static context", "New object"], answer: "Current class instance" },
    { question: "Which exception is unchecked?", options: ["NullPointerException", "IOException", "SQLException", "ClassNotFoundException"], answer: "NullPointerException" },
    { question: "Which stream is used to read characters?", options: ["FileReader", "FileInputStream", "BufferedInputStream", "DataInputStream"], answer: "FileReader" },
    { question: "What is the default capacity of an ArrayList?", options: ["10", "5", "0", "20"], answer: "10" },
    { question: "What is the output of 10/0 in Java?", options: ["ArithmeticException", "Infinity", "0", "NaN"], answer: "ArithmeticException" },
    { question: "Which class is immutable?", options: ["String", "StringBuilder", "StringBuffer", "ArrayList"], answer: "String" },
    { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Verified Machine", "Java Variable Module", "None"], answer: "Java Virtual Machine" },
    { question: "Which of these is not a primitive type?", options: ["String", "int", "double", "boolean"], answer: "String" },
    { question: "Which statement is used to exit a loop?", options: ["break", "exit", "return", "continue"], answer: "break" },
    { question: "Which class is used for mutable strings?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder" },
    { question: "What is an interface?", options: ["A contract with method declarations", "A class", "A module", "A library"], answer: "A contract with method declarations" },
    { question: "Which operator is used for bitwise AND?", options: ["&", "&&", "|", "||"], answer: "&" },
    { question: "Which collection allows key-value pairs?", options: ["Map", "Set", "List", "Queue"], answer: "Map" }
  ],

  quiz4: [ // Advanced
    { question: "What is Java Reflection API used for?", options: ["To examine or modify the runtime behavior", "To compile Java code", "To generate bytecode", "To perform garbage collection"], answer: "To examine or modify the runtime behavior" },
    { question: "What is a lambda expression?", options: ["Anonymous function", "A type of interface", "JavaFX expression", "None"], answer: "Anonymous function" },
    { question: "Which functional interface is used in lambda expressions?", options: ["Predicate", "Runnable", "Comparator", "All of the above"], answer: "All of the above" },
    { question: "Which package contains Stream API?", options: ["java.util.stream", "java.io", "java.lang", "java.data"], answer: "java.util.stream" },
    { question: "Which is true for final methods?", options: ["They cannot be overridden", "They cannot be inherited", "They must be static", "They must be private"], answer: "They cannot be overridden" },
    { question: "What does the volatile keyword mean?", options: ["Changes to variable are visible to all threads", "Variable cannot be changed", "Variable is shared across instances", "None"], answer: "Changes to variable are visible to all threads" },
    { question: "What does Optional help with in Java?", options: ["Avoiding NullPointerException", "Enhancing performance", "Serialization", "Reflection"], answer: "Avoiding NullPointerException" },
    { question: "What does the transient keyword do?", options: ["Prevents field from being serialized", "Makes variable static", "Stops garbage collection", "None"], answer: "Prevents field from being serialized" },
    { question: "What is the parent of all exception classes?", options: ["Throwable", "Exception", "RuntimeException", "Object"], answer: "Throwable" },
    { question: "What is try-with-resources used for?", options: ["Auto-close resources", "Manual exception handling", "Performance tuning", "Logging"], answer: "Auto-close resources" },
    { question: "Which of these is a marker interface?", options: ["Serializable", "Comparable", "Runnable", "List"], answer: "Serializable" },
    { question: "What does finalize() method do?", options: ["Called before garbage collection", "Manually deletes object", "Starts the program", "Locks the thread"], answer: "Called before garbage collection" },
    { question: "Which command is used to compile Java code?", options: ["javac", "java", "compile", "jre"], answer: "javac" },
    { question: "What is the difference between == and .equals()?", options: ["== compares references, .equals() compares values", "Both do the same", "== is for values only", ".equals() compares reference only"], answer: "== compares references, .equals() compares values" },
    { question: "Which class is thread-safe for string manipulation?", options: ["StringBuffer", "StringBuilder", "String", "ArrayList"], answer: "StringBuffer" },
    { question: "Which interface provides for-each method in Java 8?", options: ["Iterable", "Collection", "List", "Iterator"], answer: "Iterable" },
    { question: "What is method reference in Java 8?", options: ["Shorthand for lambda", "Variable reference", "Class reference", "None"], answer: "Shorthand for lambda" },
    { question: "What is the base class of all I/O classes?", options: ["InputStream", "Reader", "IOException", "File"], answer: "InputStream" },
    { question: "Which of these is a daemon thread?", options: ["A thread that runs in background", "Thread that runs first", "Main thread", "Thread that never stops"], answer: "A thread that runs in background" },
    { question: "Which exception is thrown when casting fails?", options: ["ClassCastException", "IOException", "NullPointerException", "IllegalStateException"], answer: "ClassCastException" }
  ],

  quiz5: [ // Expert
    { question: "What will happen if wait() is called without synchronized block?", options: ["IllegalMonitorStateException", "Thread waits normally", "Nothing happens", "Thread exits"], answer: "IllegalMonitorStateException" },
    { question: "Which keyword is used to define an enumeration?", options: ["enum", "define", "constant", "fixed"], answer: "enum" },
    { question: "What is the use of CompletableFuture?", options: ["Handle async tasks", "Create new threads", "Cancel futures", "Serialize objects"], answer: "Handle async tasks" },
    { question: "Which data structure provides O(1) lookup?", options: ["HashMap", "ArrayList", "TreeSet", "LinkedList"], answer: "HashMap" },
    { question: "What is the output of: System.out.println(0.0/0);", options: ["NaN", "Infinity", "0", "Error"], answer: "NaN" },
    { question: "What does the synchronized keyword ensure?", options: ["Only one thread accesses a block at a time", "Fast execution", "Better memory", "Garbage collection"], answer: "Only one thread accesses a block at a time" },
    { question: "Which interface supports chaining operations on streams?", options: ["Stream", "List", "Queue", "Iterable"], answer: "Stream" },
    { question: "What is the difference between HashMap and Hashtable?", options: ["Hashtable is synchronized", "HashMap is synchronized", "Hashtable allows nulls", "No difference"], answer: "Hashtable is synchronized" },
    { question: "Which annotation is used for overriding a method?", options: ["@Override", "@Overload", "@Over", "@Method"], answer: "@Override" },
    { question: "What is the purpose of the default method in interface?", options: ["Provide method body", "Force override", "Prevent override", "None"], answer: "Provide method body" },
    { question: "What is the use of ForkJoinPool?", options: ["Parallelism in Java", "Thread sleep", "Forking processes", "Memory cleanup"], answer: "Parallelism in Java" },
    { question: "Which Java version introduced modules?", options: ["Java 9", "Java 8", "Java 7", "Java 6"], answer: "Java 9" },
    { question: "Which class provides thread-safe ArrayList alternative?", options: ["CopyOnWriteArrayList", "Vector", "ConcurrentArray", "SafeList"], answer: "CopyOnWriteArrayList" },
    { question: "Which mechanism is used by JVM to free memory?", options: ["Garbage Collection", "Memory Pooling", "Manual release", "Pointer Deletion"], answer: "Garbage Collection" },
    { question: "Which command runs a compiled Java class?", options: ["java", "javac", "run", "jvm"], answer: "java" },
    { question: "What is the purpose of the strictfp keyword?", options: ["Enforce floating-point precision", "Make function private", "Optimize performance", "None"], answer: "Enforce floating-point precision" },
    { question: "What does the join() method do in threads?", options: ["Waits for thread to die", "Pauses thread", "Starts thread", "Interrupts thread"], answer: "Waits for thread to die" },
    { question: "What is the output of: 'abc'.compareTo('abd')?", options: ["-1", "1", "0", "Exception"], answer: "-1" },
    { question: "Which class is used to manipulate time/date?", options: ["LocalDateTime", "DateUtils", "TimeLib", "Timer"], answer: "LocalDateTime" },
    { question: "What is a deadlock?", options: ["Two threads waiting on each other", "Thread completes normally", "Program crash", "NullPointerException"], answer: "Two threads waiting on each other" }
  ]
};
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderQuiz(level) {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  const quiz = shuffleArray([...javaQuizzes[level]]);
  if (!quiz) {
    container.innerHTML = "<p>Quiz not found!</p>";
    return;
  }

  const form = document.createElement("form");
  form.id = "javaQuizForm";

  quiz.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = "quiz-question";

    const p = document.createElement("p");
    p.textContent = `${idx + 1}. ${q.question}`;
    div.appendChild(p);

    q.options.forEach(option => {
      const label = document.createElement("label");
      label.style.display = "block";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${idx}`;
      input.value = option;
      label.appendChild(input);

      label.append(` ${option}`);
      div.appendChild(label);
    });

    form.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit Quiz";
  submitBtn.onclick = function (e) {
    e.preventDefault();
    let score = 0;
    const results = [];

    quiz.forEach((q, idx) => {
      const selected = form[`q${idx}`].value;
      const isCorrect = selected === q.answer;
      results.push({
        question: q.question,
        selected,
        correct: q.answer,
        isCorrect,
        explanation: `Correct Answer: ${q.answer}`
      });
      if (isCorrect) score++;
    });

    container.innerHTML = `<h3 class='results-heading'>🧾 Quiz Results</h3>`;
    results.forEach((res, i) => {
      const div = document.createElement("div");
      div.className = res.isCorrect ? "result-card correct" : "result-card incorrect";

      div.innerHTML = `
        <p><strong>Q${i + 1}: ${res.question}</strong></p>
        <p class="your-answer">✅ Your Answer: <span>${res.selected || 'Not Answered'}</span></p>
        <p class="explanation">📌 ${res.explanation}</p>
      `;
      container.appendChild(div);
    });

    const summary = document.createElement("div");
    summary.className = "score-summary fancy-gradient";
    summary.innerHTML = `
      <h3>📊 Final Score: ${score}/${quiz.length}</h3>
      <p>🎯 ${(score / quiz.length * 100).toFixed(2)}%</p>
    `;
    // Save to backend API
const email = localStorage.getItem('loggedInEmail') || 'guest@example.com';
let quizTitle = '';

switch (level) {
  case 'quiz1': quizTitle = 'Java Beginner'; break;
  case 'quiz2': quizTitle = 'Java Basic'; break;
  case 'quiz3': quizTitle = 'Java Intermediate'; break;
  case 'quiz4': quizTitle = 'Java Advanced'; break;
  case 'quiz5': quizTitle = 'Java Expert'; break;
  default: quizTitle = 'Java Quiz'; break;
}

fetch('http://localhost:3888/api/save-quiz-score', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, quiz: quizTitle, score, total: quiz.length })
})
.then(res => res.json())
.then(data => console.log('✅ Quiz saved:', data))
.catch(err => console.error('❌ Error saving quiz:', err));

    container.appendChild(summary);
  };

  form.appendChild(submitBtn);
  container.appendChild(form);
}

document.getElementById("quiz1Btn").addEventListener("click", () => renderQuiz("quiz1"));
document.getElementById("quiz2Btn").addEventListener("click", () => renderQuiz("quiz2"));
document.getElementById("quiz3Btn").addEventListener("click", () => renderQuiz("quiz3"));
document.getElementById("quiz4Btn").addEventListener("click", () => renderQuiz("quiz4"));
document.getElementById("quiz5Btn").addEventListener("click", () => renderQuiz("quiz5"));
