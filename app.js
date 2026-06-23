function showToast(msg) { const t=document.getElementById('toast'); t.textContent=msg; t.style.display='block'; setTimeout(()=>t.style.display='none',1500); }

document.addEventListener('DOMContentLoaded', ()=>{
  const src = document.getElementById('sourceText');
  const out = document.getElementById('translatedText');
  const btn = document.getElementById('translateBtn');
  const charCount = document.getElementById('charCount');

  src.addEventListener('input', ()=>{ charCount.textContent = `${src.value.length} / 5000`; });

  btn.addEventListener('click', ()=>{
    const text = src.value.trim();
    if(!text) { showToast('请输入要翻译的文本'); return; }
    // 简单演示：把原文原样显示并标注目标语言
    const tgt = document.getElementById('targetLang').value;
    out.innerHTML = `<div><strong>[${tgt}]</strong> ${escapeHtml(text)}</div>`;
  });

  document.getElementById('clearBtn').addEventListener('click', ()=>{ src.value=''; out.innerHTML='<span class="placeholder">翻译结果将在这里显示...</span>'; charCount.textContent='0 / 5000'; });

  document.getElementById('historyBtn').addEventListener('click', ()=>{ document.getElementById('historyPanel').classList.add('open'); });
  document.getElementById('closeHistory').addEventListener('click', ()=>{ document.getElementById('historyPanel').classList.remove('open'); });

  document.getElementById('copyTargetBtn').addEventListener('click', ()=>{ copyText(out.innerText); showToast('已复制译文'); });
  document.getElementById('copySourceBtn').addEventListener('click', ()=>{ copyText(src.value); showToast('已复制原文'); });

  function copyText(t){ navigator.clipboard?.writeText(t).catch(()=>{}); }

  // 小工具
  function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
});
