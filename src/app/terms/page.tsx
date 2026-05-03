import Link from 'next/link'
import Header from '@/components/Header'
import styles from './page.module.css'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.backRow}>
          <Link href="/" className={styles.backLink}>← ホームに戻る</Link>
        </div>
        <h1 className={styles.pageTitle}>利用規約</h1>
        <p className={styles.notice}>本サービスは現在テスト運営中です。予告なく内容の変更・機能の追加・サービスの停止を行う場合があります。</p>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. サービスの概要</h2>
          <p className={styles.body}>本サービスは、日常のマインドフルネスな行動を記録・共有することを目的としたプラットフォームです。ユーザーは行動内容および関連する研究・出典を投稿することができます。</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. 投稿者の責任</h2>
          <ul className={styles.list}>
            <li>投稿内容は、投稿者自身の責任において作成・掲載されます。</li>
            <li>投稿に記載する研究・出典情報の正確性は、投稿者が責任を負います。</li>
            <li>第三者の著作権・肖像権・その他の権利を侵害しないよう努める責任を負います。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. 禁止事項</h2>
          <p className={styles.body}>以下の投稿は禁止します。</p>
          <ul className={styles.list}>
            <li>他者への誹謗中傷・差別的表現を含む内容</li>
            <li>虚偽または意図的に誤解を招く情報</li>
            <li>第三者の著作権・知的財産権を侵害する内容</li>
            <li>研究・論文の無断転載や改ざん</li>
            <li>特定の商品・サービスの宣伝を目的とした投稿</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. 研究・出典の引用について</h2>
          <p className={styles.body}>投稿に記載された研究や出典は投稿者による引用であり、運営がその内容・信頼性を審査・保証するものではありません。情報の利用はご自身の判断と責任において行ってください。</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. 健康・医療効果について</h2>
          <p className={styles.body}>本サービスで紹介される行動・情報は、特定の健康効果や医療効果を保証するものではありません。体調や健康に関する判断は、必要に応じて医療専門家にご相談ください。</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. 運営の権限</h2>
          <ul className={styles.list}>
            <li>ガイドライン違反が確認された投稿は、予告なく削除する場合があります。</li>
            <li>本規約は予告なく変更される場合があります。変更後も継続してサービスを利用した場合、変更後の規約に同意したものとみなします。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. 免責事項</h2>
          <p className={styles.body}>運営は、投稿内容の正確性・完全性・適法性を保証しません。本サービスの利用によって生じたいかなる損害についても、運営は責任を負いません。</p>
        </section>
      </main>
    </>
  )
}
