'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment-button');
const resultArea = document.getElementById('result-area');
const resultContent = document.getElementById('result-content');

const answers = [
    '{userName}のいいところは情熱です。その熱い魂が周囲を動かします。',
    '{userName}のいいところは冷静さです。鋭い観察眼で真実を見抜きます。',
    '{userName}のいいところは優しさです。あなたの存在が仲間の癒やしになります。',
    '{userName}のいいところは行動力です。迷わず突き進む姿はまさにリーダーです。',
    '{userName}のいいところは知識です。博識なあなたの助言を皆が頼りにしています。'
];

/**
 * 名前を受け取って診断結果を返す関数
 * @param {string} userName 
 * @returns {string} 診断結果
 */
function assess(userName) {
    // 全文字のコード番号を足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode += userName.charCodeAt(i);
    }

    // 合計を回答の数で割って添字を決める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    return result.replace(/{userName}/g, userName);
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return; // 名前が空なら何もしない
    }

    // 診断実行
    const result = assess(userName);

    // 表示とアニメーション適用
    resultContent.innerText = result;
    resultArea.classList.remove('cut-in');
    void resultArea.offsetWidth; // リフローを強制してアニメーションを再トリガー
    resultArea.classList.add('cut-in');
};

// Enterキーでも診断できるようにする
userNameInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        assessmentButton.onclick();
    }
};
