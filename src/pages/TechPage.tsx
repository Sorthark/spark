import { Link } from 'react-router-dom'
import { METRICS, SCOPE } from '../data/site'
import { IconVideo } from '../components/Icons'

export function TechPage() {
  return (
    <>
      <header className="page-banner">
        <div className="eyebrow">TECH</div>
        <h1>技术架构与工作流</h1>
        <p>星火 4.0 Ultra + 工作流编排 + OCR + 长期记忆 + 文生图；节点职责单一，变量显式传递。</p>
      </header>

      <div className="metrics">
        {METRICS.map((m) => (
          <div className="metric" key={m.l}>
            <div className="n">{m.n}</div>
            <div className="l">{m.l}</div>
          </div>
        ))}
      </div>

      <ul className="list">
        <li>
          <strong>用户交互层</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            粘贴笔记、上传图片与 PDF、问答节点收集作答；考点地图、精讲与诊断报告流式输出。
          </div>
        </li>
        <li>
          <strong>工作流编排层</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            共 29 个节点、29 条连接边：6 个模型节点（知识卡 · 资料诊断 · 限时精讲 · 诊断测验 · 判分补练 ·
            资源推荐）与 8 个代码节点（OCR 清洗 · 统一输入 · KP 标准化 · 分数二次核算 · 记忆清洗…）。
            串行迭代知识卡保持 KP 顺序，资料诊断后同时驱动精讲与思维导图，形成双分支并行。
          </div>
        </li>
        <li>
          <strong>长期记忆机制</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            工作流关闭多轮历史，只靠变量存储 + 长期记忆传上下文；记忆库按最多 5 条检索（课程名、目标分数、
            上次薄弱 KP），下次进入同一课程自动读取档案，不必重复介绍背景。
          </div>
        </li>
        <li>
          <strong>确定性交给代码</strong>
          <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
            模型负责理解与生成，代码负责格式清洗、变量提取与分数核算——判分后由代码节点正则重算总分与等级，
            消除模型算术误差，结果可回溯。
          </div>
        </li>
      </ul>

      <div className="scope-row">
        {SCOPE.map((s) => (
          <div className="scope-chip" key={s.k}>
            <span>{s.k}</span>
            <b>{s.v}</b>
          </div>
        ))}
      </div>

      <div className="cta-row" style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" to="/video?tab=walk">
          <IconVideo size={16} /> 看讲解视频
        </Link>
        <Link className="btn btn-ghost" to="/demo">
          实机取证截图
        </Link>
      </div>
    </>
  )
}
