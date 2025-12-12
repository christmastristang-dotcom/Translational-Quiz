let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // 用於儲存使用者在每題的選擇
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');

// --- 輔助函數：渲染單一題目 ---
function renderQuestion() {
    const q = questions[currentQuestionIndex];
    quizArea.innerHTML = `
        <p class="question-text"><strong>Question ${q.id} / ${questions.length}:</strong> ${q.question_text}</p>
        <div class="options-container">
            ${Object.keys(q.options).map(key => `
                <label>
                    <input type="radio" name="answer" value="${key}">
                    ${key}. ${q.options[key]}
                </label>
            `).join('')}
        </div>
        <div class="button-group">
            <button id="submit-btn" onclick="checkAnswer()">Submit</button>
            <button id="next-btn" onclick="nextQuestion()">Next Question &raquo;</button>
        </div>
        <div id="feedback-box"></div>
    `;
}

// --- 核心函數：檢查答案並顯示詳解 ---
window.checkAnswer = function() {
    const q = questions[currentQuestionIndex];
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedbackBox = document.getElementById('feedback-box');

    // 1. 檢查是否有作答
    if (!selectedOption) {
        alert('Please select an answer before submitting.');
        return;
    }

    const userAnswer = selectedOption.value;
    const isCorrect = (userAnswer === q.correct_answer);
    userAnswers[currentQuestionIndex] = isCorrect;

    // 2. 累積分數
    if (isCorrect) {
        score++;
        feedbackBox.className = 'feedback-box correct';
    } else {
        feedbackBox.className = 'feedback-box incorrect';
    }

    // 3. 顯示解答與詳解
    feedbackBox.innerHTML = `
        <p><strong>Your Answer:</strong> ${userAnswer}</p>
        <p><strong>Result:</strong> ${isCorrect ? 'Correct!' : 'Incorrect!'}</p>
        <p><strong>Correct Answer:</strong> ${q.correct_answer}</p>
        <p><strong>Explanation:</strong> ${q.explanation}</p>
    `;

    // 4. 禁用選項並切換按鈕
    document.querySelectorAll('input[name="answer"]').forEach(radio => radio.disabled = true);
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
};

// --- 核心函數：進入下一題或完成測驗 ---
window.nextQuestion = function() {
    currentQuestionIndex++;
    document.getElementById('feedback-box').innerHTML = ''; // 清除回饋區

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
};

// --- 核心函數：顯示最終結果與評估 ---
function showResults() {
    quizArea.style.display = 'none';
    resultArea.classList.remove('hidden');

    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    let assessmentText = "";

    // 根據分數提供評估 (Assessment Logic)
    if (percentage >= 90) {
        assessmentText = "Excellent! You have a comprehensive understanding of Translational Biomedical Research concepts.";
    } else if (percentage >= 70) {
        assessmentText = "Good Job! You have a solid grasp of the material, but review some areas for improvement.";
    } else if (percentage >= 50) {
        assessmentText = "Fair Result. Focus on the core definitions of research phases and animal models.";
    } else {
        assessmentText = "Needs Improvement. We recommend reviewing the full module to build a stronger foundation.";
    }

    resultArea.innerHTML = `
        <h2>Quiz Complete!</h2>
        <div id="final-score">
            Your Final Score: ${score} / ${totalQuestions} (${percentage}%)
        </div>
        <div id="assessment">
            <h3>Assessment:</h3>
            <p>${assessmentText}</p>
        </div>
        <p style="text-align:center; margin-top:20px;"><a href="index.html">Start Over</a></p>
    `;
}

// 網站啟動
document.addEventListener('DOMContentLoaded', () => {
    renderQuestion();
});