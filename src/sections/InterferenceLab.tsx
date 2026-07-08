import SectionTag from '../components/SectionTag';
import WaveInterference from '../components/WaveInterference';
import InlineMath from '../components/InlineMath';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function InterferenceLab() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.interference;
  const ru = lang === 'ru';

  return (
    <section ref={revealRef} id="interference" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="05">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-peach">{h.titleA[lang]}</span>{' '}
          <span className="text-text-primary">{h.titleB[lang]}</span>
        </h2>

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${s.gapLg} ${s.mbLg}`}>
          <div>
            <p className={`${t.bodyPrimary} text-text-primary ${s.mbSm}`}>
              {ru ? (
                <>
                  Когда две или более когерентных волны накладываются друг на друга, их амплитуды
                  складываются по принципу суперпозиции. В точках, где волны приходят в фазе,
                  амплитуда усиливается — возникает{' '}
                  <span className="text-accent-primary">конструктивная интерференция</span>. Там,
                  где они противофазны — ослабляется или гасится —{' '}
                  <span className="text-accent-secondary">деструктивная интерференция</span>.
                </>
              ) : (
                <>
                  When two or more coherent waves overlap, their amplitudes add up by the principle
                  of superposition. Where the waves arrive in phase, the amplitude grows —{' '}
                  <span className="text-accent-primary">constructive interference</span>. Where they
                  are out of phase, it weakens or cancels —{' '}
                  <span className="text-accent-secondary">destructive interference</span>.
                </>
              )}
            </p>
            <p className={`${t.bodySecondary} text-text-muted ${s.mbSm}`}>
              {ru
                ? 'Это классический феномен — волны на воде, свет, звук. Но тот же математический аппарат описывает интерференцию вероятностей в квантовой механике и волновые функции, которые вдохновили спектакль. Коллективное внимание зрителей — как наложение множества волновых функций, которое «схлопывается» в конкретное состояние в момент наблюдения.'
                : 'This is a classical phenomenon — waves on water, light, sound. But the same mathematics describes the interference of probabilities in quantum mechanics and the wave functions that inspired the show. The collective attention of the audience is like a superposition of many wave functions that “collapses” into a definite state at the moment of observation.'}
            </p>
            <p className={`${t.bodySecondary} text-text-muted ${s.mbSm}`}>
              {ru
                ? 'Параллель с мозгом прямолинейна: нейроны тоже генерируют волны. ЭЭГ регистрирует их интерференцию — суммарную активность миллиардов клеток. Когда зрители синхронизируют внимание, их ритмы накладываются друг на друга, усиливая или ослабляя общий сигнал. Альфа, бета, гамма — это не абстракции, а физические колебания, которые мы превращаем в свет, звук и движение.'
                : 'The parallel with the brain is direct: neurons also generate waves. EEG registers their interference — the summed activity of billions of cells. When spectators synchronise their attention, their rhythms overlap, amplifying or damping the shared signal. Alpha, beta, gamma are not abstractions but physical oscillations that we turn into light, sound and movement.'}
            </p>
            <p className={`${t.caption} text-text-subtle`}>
              {ru ? (
                <>
                  На симуляторе рядом вы можете перемещать источники (перетаскивайте мышью или
                  пальцем) и наблюдать, как меняется интерференционная картина. Настройте{' '}
                  <InlineMath tex="\lambda" /> — длину волны — и посмотрите, как масштаб полос
                  зависит от неё. Добавьте разности фаз и увидите, как смещается вся система.
                </>
              ) : (
                <>
                  In the simulator beside this text you can move the sources (drag with a mouse or a
                  finger) and watch the interference pattern change. Adjust{' '}
                  <InlineMath tex="\lambda" /> — the wavelength — and see how the spacing of the
                  fringes depends on it. Add phase differences and watch the whole system shift.
                </>
              )}
            </p>
          </div>

          <div className={`border border-border bg-bg-secondary ${s.card}`}>
            <span className={`${t.label} text-text-muted block ${s.mbSm}`}>
              {ru ? 'Параметры модели' : 'Model parameters'}
            </span>

            {/* Main equation */}
            <div className={`${s.mbSm} pb-3 border-b border-border`}>
              <div className={`flex justify-center ${s.mbSm}`}>
                <InlineMath tex="E(x, y, t) = \sum A_i \cdot \cos(k_i r - \omega t + \varphi_i)" />
              </div>
              <p className={`${t.caption} text-text-subtle text-center`}>
                {ru
                  ? 'Суммарная амплитуда от всех источников в точке наблюдения'
                  : 'Total amplitude from all sources at the observation point'}
              </p>
            </div>

            {/* Legend */}
            <div className={`${s.stack} ${t.caption} ${s.mbSm}`}>
              <div className={`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 ${t.caption}`}>
                <span className="text-text-primary">
                  <InlineMath tex="E" />
                </span>
                <span className="text-text-muted">
                  {ru
                    ? 'амплитуда волны в точке наблюдения'
                    : 'wave amplitude at the observation point'}
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="x, y" />
                </span>
                <span className="text-text-muted">
                  {ru ? 'координаты точки на плоскости' : 'coordinates of a point on the plane'}
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="t" />
                </span>
                <span className="text-text-muted">{ru ? 'время' : 'time'}</span>

                <span className="text-text-primary">
                  <InlineMath tex="A_i" />
                </span>
                <span className="text-text-muted">
                  {ru ? 'амплитуда i-го источника' : 'amplitude of the i-th source'}
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="k_i" />
                </span>
                <span className="text-text-muted">
                  {ru ? 'волновое число i-го источника, ' : 'wave number of the i-th source, '}
                  <InlineMath tex="k = 2\pi/\lambda" />
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="r" />
                </span>
                <span className="text-text-muted">
                  {ru ? 'расстояние от источника, ' : 'distance from the source, '}
                  <InlineMath tex="r = \sqrt{\Delta x^2 + \Delta y^2}" />
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="\omega" />
                </span>
                <span className="text-text-muted">
                  {ru ? 'угловая частота' : 'angular frequency'}
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="\varphi_i" />
                </span>
                <span className="text-text-muted">
                  {ru ? 'начальная фаза i-го источника' : 'initial phase of the i-th source'}
                </span>

                <span className="text-text-primary">
                  <InlineMath tex="\lambda" />
                </span>
                <span className="text-text-muted">{ru ? 'длина волны' : 'wavelength'}</span>
              </div>
            </div>

            {/* Interference conditions */}
            <div className={`${s.stack} pb-3 border-b border-border ${s.mbSm}`}>
              <span className={`${t.label} text-text-muted block`}>
                {ru ? 'Условия интерференции' : 'Interference conditions'}
              </span>
              <div className={`flex flex-wrap ${s.gapSm} items-baseline`}>
                <span className={`${t.caption} text-text-muted shrink-0`}>
                  {ru ? 'конструктивная (максимум амплитуды)' : 'constructive (amplitude maximum)'}
                </span>
                <span className={`${t.caption} text-text-primary`}>
                  <InlineMath tex="\Delta r = m \cdot \lambda" />
                </span>
              </div>
              <div className={`flex flex-wrap ${s.gapSm} items-baseline`}>
                <span className={`${t.caption} text-text-muted shrink-0`}>
                  {ru ? 'деструктивная (минимум амплитуды)' : 'destructive (amplitude minimum)'}
                </span>
                <span className={`${t.caption} text-text-primary`}>
                  <InlineMath tex="\Delta r = (m + \tfrac{1}{2}) \cdot \lambda" />
                </span>
              </div>
              <p className={`${t.caption} text-text-subtle`}>
                <InlineMath tex="\Delta r" />{' '}
                {ru
                  ? '— разность расстояний от двух источников до точки наблюдения. '
                  : '— the difference in distances from two sources to the observation point. '}
                <InlineMath tex="m" />{' '}
                {ru
                  ? '= 0, 1, 2, … — целое число (порядок интерференции).'
                  : '= 0, 1, 2, … — an integer (the order of interference).'}
              </p>
            </div>

            {/* Simulator link */}
            <div className={t.caption}>
              <span className={`${t.label} text-text-muted block ${s.mbSm}`}>
                {ru ? 'Настройка в симуляторе' : 'Tuning in the simulator'}
              </span>
              <p className={`${t.caption} text-text-muted`}>
                <InlineMath tex="\lambda = \lambda_0 \cdot" />{' '}
                <span className={`${t.highlight} text-accent-primary`}>
                  <InlineMath tex="\lambda" /> factor
                </span>{' '}
                {ru
                  ? '— ползунок под каждым источником меняет длину волны относительно базового значения '
                  : '— the slider under each source changes the wavelength relative to the base value '}
                <InlineMath tex="\lambda_0" />.
              </p>
            </div>
          </div>
        </div>

        <WaveInterference />
      </div>
    </section>
  );
}
