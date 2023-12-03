import {
  bF as E,
  bE as u,
  bQ as d1,
  bR as z,
  bS as M1,
  bK as S1,
  bL as x1,
  by as p,
  bN as w,
  bA as I,
  bt as u1,
  bT as A,
  bU as i,
  bx as L,
  bV as E1,
  bs as a1,
  bW as Z1,
  bX as V1,
  bY as q1,
  bZ as I1,
  b_ as L1,
  bO as T1,
  b$ as H1
} from './vendor.cc682980.js'
import { T as X, P as m1, D as f1, a as Q, O as O1 } from './vant.89ecb901.js'
const $1 = function () {
  const a = document.createElement('link').relList
  if (a && a.supports && a.supports('modulepreload')) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) e(n)
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && e(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(n) {
    const s = {}
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function e(n) {
    if (n.ep) return
    n.ep = !0
    const s = t(n)
    fetch(n.href, s)
  }
}
$1()
const j1 = 'modulepreload',
  P1 = function (F) {
    return '/' + F
  },
  n1 = {},
  k = function (a, t, e) {
    return !t || t.length === 0
      ? a()
      : Promise.all(
          t.map((n) => {
            if (((n = P1(n)), n in n1)) return
            n1[n] = !0
            const s = n.endsWith('.css'),
              o = s ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${n}"]${o}`)) return
            const l = document.createElement('link')
            if (
              ((l.rel = s ? 'stylesheet' : j1),
              s || ((l.as = 'script'), (l.crossOrigin = '')),
              (l.href = n),
              document.head.appendChild(l),
              s)
            )
              return new Promise((r, c) => {
                l.addEventListener('load', r),
                  l.addEventListener('error', () => c(new Error(`Unable to preload CSS for ${n}`)))
              })
          })
        ).then(() => a())
  },
  z1 = '_navbar_1jgho_1',
  Y1 = '_title_wrapper_1jgho_11',
  N1 = '_icon_wrapper_1jgho_16',
  Y = { navbar: z1, title_wrapper: Y1, icon_wrapper: N1 },
  U1 = E({
    props: { name: { type: String } },
    setup: (F, a) => {
      const { slots: t } = a
      return () => {
        var e, n
        return u('div', { class: Y.navbar }, [
          u('span', { class: Y.icon_wrapper }, [(e = t.icon) == null ? void 0 : e.call(t)]),
          u('span', { class: Y.title_wrapper }, [(n = t.default) == null ? void 0 : n.call(t)])
        ])
      }
    }
  }),
  R1 = '_wrapper_1r3v1_1',
  W1 = '_navbar_1r3v1_4',
  s1 = { wrapper: R1, navbar: W1 },
  D1 = E({
    setup: (F, a) => () => {
      var t, e
      return u('div', { class: s1.wrapper }, [
        u(
          U1,
          { class: s1.navbar },
          {
            default: () => {
              var n, s
              return (s = (n = a.slots).title) == null ? void 0 : s.call(n)
            },
            icon: () => {
              var n, s
              return (s = (n = a.slots).icon) == null ? void 0 : s.call(n)
            }
          }
        ),
        (e = (t = a.slots).default) == null ? void 0 : e.call(t)
      ])
    }
  }),
  K1 = '_icon_1xl7c_1',
  X1 = { icon: K1 },
  b = E({
    props: { name: { type: String, required: !0 }, onClick: { type: Function } },
    setup: (F, a) => () =>
      u('svg', { class: X1.icon, onClick: F.onClick }, [u('use', { 'xlink:href': '#' + F.name }, null)])
  }),
  Q1 = E({
    setup: (F, a) => {
      const t = d1(),
        e = z(),
        n = () => {
          const { return_to: s } = t.query
          s ? e.push(s.toString()) : e.back()
        }
      return () => u(b, { name: 'left', onClick: n }, null)
    }
  })
class G1 {
  constructor(a) {
    this.instance = M1.create({ baseURL: a })
  }
  get(a, t, e) {
    return this.instance.request({ ...e, url: a, params: t, method: 'get' })
  }
  post(a, t, e) {
    return this.instance.request({ ...e, url: a, data: t, method: 'post' })
  }
  patch(a, t, e) {
    return this.instance.request({ ...e, url: a, data: t, method: 'patch' })
  }
  delete(a, t, e) {
    return this.instance.request({ ...e, url: a, params: t, method: 'delete' })
  }
}
const S = new G1('http://123.56.180.76:3000/api/v1')
S.instance.interceptors.request.use((F) => {
  const a = localStorage.getItem('jwt')
  return (
    a && (F.headers.Authorization = `Bearer ${a}`),
    F._autoLoading === !0 && X.loading({ message: '\u52A0\u8F7D\u4E2D...', forbidClick: !0, duration: 0 }),
    F
  )
})
S.instance.interceptors.response.use(
  (F) => (F.config._autoLoading === !0 && X.clear(), F),
  (F) => {
    var a
    throw (((a = F.response) == null ? void 0 : a.config._autoLoading) === !0 && X.clear(), F)
  }
)
S.instance.interceptors.response.use(
  (F) => F,
  (F) => {
    var a
    throw (
      (F.response && ((a = F.response) == null ? void 0 : a.status) === 429 && alert('\u4F60\u592A\u9891\u7E41\u4E86'),
      F)
    )
  }
)
const J1 = '_tabs_1wn8b_1',
  uu = '_tabs_nav_1wn8b_4',
  Fu = '_selected_1wn8b_20',
  N = { tabs: J1, tabs_nav: uu, selected: Fu },
  G = E({
    props: {
      classPrefix: { type: String },
      selected: { type: String, required: !1 },
      rerenderOnSelect: { type: Boolean, default: !1 }
    },
    emits: ['update:selected'],
    setup: (F, a) => () => {
      var n, s
      const t = (s = (n = a.slots).default) == null ? void 0 : s.call(n)
      if (!t) return () => null
      for (let o = 0; o < t.length; o++) if (t[o].type !== y) throw new Error('<Tabs> only accepts <Tab> as children')
      const e = F.classPrefix
      return u('div', { class: [N.tabs, e + '_tabs'] }, [
        u('ol', { class: [N.tabs_nav, e + '_tabs_nav'] }, [
          t.map((o) => {
            var l, r
            return u(
              'li',
              {
                class: [
                  ((l = o.props) == null ? void 0 : l.value) === F.selected ? [N.selected, e + '_selected'] : '',
                  e + '_tabs_nav_item'
                ],
                onClick: () => {
                  var c
                  return a.emit('update:selected', (c = o.props) == null ? void 0 : c.value)
                }
              },
              [(r = o.props) == null ? void 0 : r.name]
            )
          })
        ]),
        F.rerenderOnSelect
          ? u('div', { key: F.selected }, [
              t.find((o) => {
                var l
                return ((l = o.props) == null ? void 0 : l.value) === F.selected
              })
            ])
          : u('div', null, [
              t.map((o) => {
                var l
                return S1(u('div', null, [o]), [[x1, ((l = o.props) == null ? void 0 : l.value) === F.selected]])
              })
            ])
      ])
    }
  }),
  y = E({
    props: { name: { type: String, required: !0 }, value: { type: String, required: !0 } },
    setup: (F, a) => () => {
      var t, e
      return u('div', null, [(e = (t = a.slots).default) == null ? void 0 : e.call(t)])
    }
  }),
  tu = (F, a) => {
    const t = {}
    return (
      a.map((e) => {
        var r, c, d, g, f, H
        const { key: n, type: s, message: o } = e,
          l = F[n]
        switch (s) {
          case 'required':
            U(l) && ((t[n] = (r = t[n]) != null ? r : []), (c = t[n]) == null || c.push(o))
            break
          case 'pattern':
            !U(l) &&
              !e.regex.test(l.toString()) &&
              ((t[n] = (d = t[n]) != null ? d : []), (g = t[n]) == null || g.push(o))
            break
          case 'notEqual':
            !U(l) && l === e.value && ((t[n] = (f = t[n]) != null ? f : []), (H = t[n]) == null || H.push(o))
            break
          default:
            return
        }
      }),
      t
    )
  }
function U(F) {
  return F == null || F === ''
}
function eu(F) {
  var t
  let a = !1
  for (let e in F)
    if (((t = F[e]) == null ? void 0 : t.length) > 0) {
      a = !0
      break
    }
  return a
}
class B {
  constructor(a) {
    a === void 0 ? (this.date = new Date()) : typeof a == 'string' ? (this.date = new Date(a)) : (this.date = a)
  }
  format(a = 'YYYY-MM-DD') {
    const t = this.date.getFullYear(),
      e = this.date.getMonth() + 1,
      n = this.date.getDate(),
      s = this.date.getHours(),
      o = this.date.getMinutes(),
      l = this.date.getSeconds(),
      r = this.date.getMilliseconds()
    return a
      .replace(/YYYY/g, t.toString())
      .replace(/MM/, e.toString().padStart(2, '0'))
      .replace(/DD/, n.toString().padStart(2, '0'))
      .replace(/HH/, s.toString().padStart(2, '0'))
      .replace(/mm/, o.toString().padStart(2, '0'))
      .replace(/ss/, l.toString().padStart(2, '0'))
      .replace(/SSS/, r.toString().padStart(3, '0'))
  }
  firstDayOfMonth() {
    return new B(new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0))
  }
  firstDayOfYear() {
    return new B(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0))
  }
  lastDayOfMonth() {
    return new B(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0, 0, 0, 0))
  }
  lastDayOfYear() {
    return new B(new Date(this.date.getFullYear() + 1, 0, 0, 0, 0, 0))
  }
  getRaw() {
    return this.date
  }
  getTimestamp() {
    return this.date.getTime()
  }
  add(a, t) {
    let e = new Date(this.date.getTime())
    switch (t) {
      case 'year':
        e.setFullYear(e.getFullYear() + a)
        break
      case 'month':
        const n = e.getDate()
        e.setDate(1), e.setMonth(e.getMonth() + a)
        const s = new Date(e.getFullYear(), e.getMonth() + 1, 0, 0, 0, 0).getDate()
        e.setDate(Math.min(n, s))
        break
      case 'day':
        e.setDate(e.getDate() + a)
        break
      case 'hour':
        e.setHours(e.getHours() + a)
        break
      case 'minute':
        e.setMinutes(e.getMinutes() + a)
        break
      case 'second':
        e.setSeconds(e.getSeconds() + a)
        break
      case 'millisecond':
        e.setMilliseconds(e.getMilliseconds() + a)
        break
      default:
        throw new Error('Time.add: unknown unit')
    }
    return new B(e)
  }
}
const au = '_dateAndAmount_1ee41_1',
  nu = '_date_1ee41_1',
  su = '_icon_1ee41_17',
  lu = '_amount_1ee41_23',
  ou = '_buttons_1ee41_28',
  V = { dateAndAmount: au, date: nu, icon: su, amount: lu, buttons: ou },
  ru = E({
    props: { happenAt: String, amount: Number, onSubmit: { type: Function } },
    setup: (F, a) => {
      const t = (c) => {
          const d = c.toString(),
            g = r.value.indexOf('.')
          if (!(r.value.length >= 13) && !(g >= 0 && r.value.length - g > 2)) {
            if (d === '.') {
              if (g >= 0) return
            } else if (d === '0') {
              if (g === -1 && r.value === '0') return
            } else r.value === '0' && (r.value = '')
            r.value += c.toString()
          }
        },
        e = [
          {
            text: '1',
            onClick: () => {
              t(1)
            }
          },
          {
            text: '2',
            onClick: () => {
              t(2)
            }
          },
          {
            text: '3',
            onClick: () => {
              t(3)
            }
          },
          {
            text: '4',
            onClick: () => {
              t(4)
            }
          },
          {
            text: '5',
            onClick: () => {
              t(5)
            }
          },
          {
            text: '6',
            onClick: () => {
              t(6)
            }
          },
          {
            text: '7',
            onClick: () => {
              t(7)
            }
          },
          {
            text: '8',
            onClick: () => {
              t(8)
            }
          },
          {
            text: '9',
            onClick: () => {
              t(9)
            }
          },
          {
            text: '.',
            onClick: () => {
              t('.')
            }
          },
          {
            text: '0',
            onClick: () => {
              t(0)
            }
          },
          {
            text: '\u6E05\u7A7A',
            onClick: () => {
              r.value = '0'
            }
          },
          {
            text: '\u63D0\u4EA4',
            onClick: () => {
              var c
              a.emit('update:amount', parseFloat(r.value) * 100), (c = F.onSubmit) == null || c.call(F)
            }
          }
        ],
        n = p(!1),
        s = () => (n.value = !0),
        o = () => (n.value = !1),
        l = (c) => {
          a.emit('update:happenAt', c.toISOString()), o()
        },
        r = p(F.amount ? (F.amount / 100).toString() : '0')
      return () =>
        u(w, null, [
          u('div', { class: V.dateAndAmount }, [
            u('span', { class: V.date }, [
              u(b, { name: 'date', class: V.icon }, null),
              u('span', null, [
                u('span', { onClick: s }, [new B(F.happenAt).format()]),
                u(
                  m1,
                  { position: 'bottom', show: n.value, 'onUpdate:show': (c) => (n.value = c) },
                  {
                    default: () => [
                      u(
                        f1,
                        {
                          modelValue: F.happenAt ? new Date(F.happenAt) : new Date(),
                          type: 'date',
                          title: '\u9009\u62E9\u5E74\u6708\u65E5',
                          onConfirm: l,
                          onCancel: o
                        },
                        null
                      )
                    ]
                  }
                )
              ])
            ]),
            u('span', { class: V.amount }, [r.value])
          ]),
          u('div', { class: V.buttons }, [e.map((c) => u('button', { onClick: c.onClick }, [c.text]))])
        ])
    }
  }),
  iu = '_wrapper_a2j0b_1',
  cu = '_tabs_a2j0b_7',
  du = '_inputPad_wrapper_a2j0b_13',
  Eu = '_createTag_a2j0b_18',
  O = { wrapper: iu, tabs: cu, inputPad_wrapper: du, createTag: Eu },
  mu = '_button_12ezx_1',
  fu = '_danger_12ezx_14',
  l1 = { button: mu, danger: fu },
  T = E({
    props: {
      onClick: { type: Function },
      level: { type: String, default: 'important' },
      type: { type: String, default: 'button' },
      disabled: { type: Boolean, default: !1 },
      autoSelfDisabled: { type: Boolean, default: !1 }
    },
    setup: (F, a) => {
      const t = p(!1),
        e = I(() => (F.autoSelfDisabled === !1 ? F.disabled : t.value ? !0 : F.disabled)),
        n = (s) => {
          var o
          ;(o = F.onClick) == null || o.call(F, s),
            (t.value = !0),
            setTimeout(() => {
              t.value = !1
            }, 500)
        }
      return () => {
        var s, o
        return u('button', { disabled: e.value, type: F.type, class: [l1.button, l1[F.level]], onClick: n }, [
          (o = (s = a.slots).default) == null ? void 0 : o.call(s)
        ])
      }
    }
  }),
  Du = (F) => {
    const a = p(0),
      t = p(!1),
      e = p([]),
      n = async () => {
        const s = await F(a.value),
          { resources: o, pager: l } = s.data
        e.value.push(...o), (t.value = (l.page - 1) * l.per_page + o.length < l.count), (a.value += 1)
      }
    return u1(n), { page: a, hasMore: t, tags: e, fetchTags: n }
  },
  pu = '_more_17uhv_1',
  _u = '_tags_wrapper_17uhv_6',
  hu = '_tag_17uhv_6',
  Au = '_sign_17uhv_20',
  Cu = '_name_17uhv_30',
  gu = '_selected_17uhv_34',
  v = { more: pu, tags_wrapper: _u, tag: hu, sign: Au, name: Cu, selected: gu },
  o1 = E({
    props: { kind: { type: String, required: !0 }, selected: Number },
    emits: ['update:selected'],
    setup: (F, a) => {
      const {
          tags: t,
          hasMore: e,
          page: n,
          fetchTags: s
        } = Du((D) => S.get('/tags', { kind: F.kind, page: D + 1 }, { _mock: 'tagIndex', _autoLoading: !0 })),
        o = (D) => {
          a.emit('update:selected', D.id)
        },
        l = p(),
        r = p(),
        c = z(),
        d = (D) => {
          c.push(`/tags/${D}/edit?kind=${F.kind}`)
        },
        g = (D, x) => {
          ;(r.value = D.currentTarget),
            (l.value = setTimeout(() => {
              d(x.id)
            }, 500))
        },
        f = (D) => {
          clearTimeout(l.value)
        },
        H = (D) => {
          var e1
          const x = document.elementFromPoint(D.touches[0].clientX, D.touches[0].clientY)
          r.value !== x && ((e1 = r.value) == null ? void 0 : e1.contains(x)) === !1 && clearTimeout(l.value)
        }
      return () =>
        u(w, null, [
          u('div', { class: v.tags_wrapper, onTouchmove: H }, [
            u(
              A,
              { to: `/tags/create?kind=${F.kind}`, class: v.tag },
              {
                default: () => [
                  u('div', { class: v.sign }, [u(b, { name: 'add', class: v.createTag }, null)]),
                  u('div', { class: v.name }, [i('\u65B0\u589E')])
                ]
              }
            ),
            t.value.map((D) =>
              u(
                'div',
                {
                  class: [v.tag, F.selected === D.id ? v.selected : ''],
                  onClick: () => o(D),
                  onTouchstart: (x) => g(x, D),
                  onTouchend: f
                },
                [u('div', { class: v.sign }, [D.sign]), u('div', { class: v.name }, [D.name])]
              )
            )
          ]),
          u('div', { class: v.more }, [
            e.value
              ? u(T, { class: v.loadMore, onClick: s }, { default: () => [i('\u52A0\u8F7D\u66F4\u591A')] })
              : u('span', { class: v.noMore }, [i('\u6CA1\u6709\u66F4\u591A')])
          ])
        ])
    }
  }),
  vu = E({
    props: { name: { type: String } },
    setup: (F, a) => {
      const t = L({ kind: 'expenses', tag_ids: [], amount: 0, happen_at: new Date().toISOString() }),
        e = L({ kind: [], tag_ids: [], amount: [], happen_at: [] }),
        n = z(),
        s = (l) => {
          var r
          throw (
            (((r = l.response) == null ? void 0 : r.status) === 422 &&
              Q.alert({
                title: '\u51FA\u9519',
                message: Object.values(l.response.data.errors).join(`
`)
              }),
            l)
          )
        },
        o = async () => {
          if (
            (Object.assign(e, { kind: [], tag_ids: [], amount: [], happen_at: [] }),
            Object.assign(
              e,
              tu(t, [
                { key: 'kind', type: 'required', message: '\u7C7B\u578B\u5FC5\u586B' },
                { key: 'tag_ids', type: 'required', message: '\u6807\u7B7E\u5FC5\u586B' },
                { key: 'amount', type: 'required', message: '\u91D1\u989D\u5FC5\u586B' },
                { key: 'amount', type: 'notEqual', value: 0, message: '\u91D1\u989D\u4E0D\u80FD\u4E3A\u96F6' },
                { key: 'happen_at', type: 'required', message: '\u65F6\u95F4\u5FC5\u586B' }
              ])
            ),
            eu(e))
          ) {
            Q.alert({
              title: '\u51FA\u9519',
              message: Object.values(e).filter((l) => l.length > 0).join(`
`)
            })
            return
          }
          await S.post('/items', t, { _mock: 'itemCreate', _autoLoading: !0 }).catch(s), n.push('/items')
        }
      return () =>
        u(
          D1,
          { class: O.layout },
          {
            title: () => '\u8BB0\u4E00\u7B14',
            icon: () => u(Q1, null, null),
            default: () =>
              u(w, null, [
                u('div', { class: O.wrapper }, [
                  u(
                    G,
                    { selected: t.kind, 'onUpdate:selected': (l) => (t.kind = l), class: O.tabs },
                    {
                      default: () => [
                        u(
                          y,
                          { value: 'expenses', name: '\u652F\u51FA' },
                          {
                            default: () => [
                              u(
                                o1,
                                {
                                  kind: 'expenses',
                                  selected: t.tag_ids[0],
                                  'onUpdate:selected': (l) => (t.tag_ids[0] = l)
                                },
                                null
                              )
                            ]
                          }
                        ),
                        u(
                          y,
                          { value: 'income', name: '\u6536\u5165' },
                          {
                            default: () => [
                              u(
                                o1,
                                {
                                  kind: 'income',
                                  selected: t.tag_ids[0],
                                  'onUpdate:selected': (l) => (t.tag_ids[0] = l)
                                },
                                null
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  u('div', { class: O.inputPad_wrapper }, [
                    u(
                      ru,
                      {
                        happenAt: t.happen_at,
                        'onUpdate:happenAt': (l) => (t.happen_at = l),
                        amount: t.amount,
                        'onUpdate:amount': (l) => (t.amount = l),
                        onSubmit: o
                      },
                      null
                    )
                  ])
                ])
              ])
          }
        )
    }
  }),
  Bu = [
    [
      'face-smiling',
      [
        '\u{1F600}',
        '\u{1F603}',
        '\u{1F604}',
        '\u{1F601}',
        '\u{1F606}',
        '\u{1F605}',
        '\u{1F923}',
        '\u{1F602}',
        '\u{1F642}',
        '\u{1F643}',
        '\u{1FAE0}',
        '\u{1F609}',
        '\u{1F60A}',
        '\u{1F607}'
      ]
    ],
    [
      'face-affection',
      ['\u{1F970}', '\u{1F60D}', '\u{1F929}', '\u{1F618}', '\u{1F617}', '\u263A', '\u{1F61A}', '\u{1F619}', '\u{1F972}']
    ],
    ['face-tongue', ['\u{1F60B}', '\u{1F61B}', '\u{1F61C}', '\u{1F92A}', '\u{1F61D}', '\u{1F911}']],
    ['face-hand', ['\u{1F917}', '\u{1F92D}', '\u{1FAE2}', '\u{1FAE3}', '\u{1F92B}', '\u{1F914}', '\u{1FAE1}']],
    [
      'face-neutral-skeptical',
      [
        '\u{1F910}',
        '\u{1F928}',
        '\u{1F610}',
        '\u{1F611}',
        '\u{1F636}',
        '\u{1FAE5}',
        '\u{1F636}\u200D\u{1F32B}\uFE0F',
        '\u{1F60F}',
        '\u{1F612}',
        '\u{1F644}',
        '\u{1F62C}',
        '\u{1F62E}\u200D\u{1F4A8}',
        '\u{1F925}'
      ]
    ],
    ['face-sleepy', ['\u{1F60C}', '\u{1F614}', '\u{1F62A}', '\u{1F924}', '\u{1F634}']],
    [
      'face-unwell',
      [
        '\u{1F637}',
        '\u{1F912}',
        '\u{1F915}',
        '\u{1F922}',
        '\u{1F92E}',
        '\u{1F927}',
        '\u{1F975}',
        '\u{1F976}',
        '\u{1F974}',
        '\u{1F635}',
        '\u{1F635}\u200D\u{1F4AB}',
        '\u{1F92F}'
      ]
    ],
    ['face-hat', ['\u{1F920}', '\u{1F973}', '\u{1F978}']],
    ['face-glasses', ['\u{1F60E}', '\u{1F913}', '\u{1F9D0}']],
    [
      'face-concerned',
      [
        '\u{1F615}',
        '\u{1FAE4}',
        '\u{1F61F}',
        '\u{1F641}',
        '\u2639',
        '\u{1F62E}',
        '\u{1F62F}',
        '\u{1F632}',
        '\u{1F633}',
        '\u{1F97A}',
        '\u{1F979}',
        '\u{1F626}',
        '\u{1F627}',
        '\u{1F628}',
        '\u{1F630}',
        '\u{1F625}',
        '\u{1F622}',
        '\u{1F62D}',
        '\u{1F631}',
        '\u{1F616}',
        '\u{1F623}',
        '\u{1F61E}',
        '\u{1F613}',
        '\u{1F629}',
        '\u{1F62B}',
        '\u{1F971}'
      ]
    ],
    [
      'face-negative',
      ['\u{1F624}', '\u{1F621}', '\u{1F620}', '\u{1F92C}', '\u{1F608}', '\u{1F47F}', '\u{1F480}', '\u2620']
    ],
    [
      'face-costume',
      ['\u{1F4A9}', '\u{1F921}', '\u{1F479}', '\u{1F47A}', '\u{1F47B}', '\u{1F47D}', '\u{1F47E}', '\u{1F916}']
    ],
    [
      'cat-face',
      [
        '\u{1F63A}',
        '\u{1F638}',
        '\u{1F639}',
        '\u{1F63B}',
        '\u{1F63C}',
        '\u{1F63D}',
        '\u{1F640}',
        '\u{1F63F}',
        '\u{1F63E}'
      ]
    ],
    ['monkey-face', ['\u{1F648}', '\u{1F649}', '\u{1F64A}']],
    [
      'emotion',
      [
        '\u{1F48B}',
        '\u{1F48C}',
        '\u{1F498}',
        '\u{1F49D}',
        '\u{1F496}',
        '\u{1F497}',
        '\u{1F493}',
        '\u{1F49E}',
        '\u{1F495}',
        '\u{1F49F}',
        '\u2763',
        '\u{1F494}',
        '\u2764\uFE0F\u200D\u{1F525}',
        '\u2764\uFE0F\u200D\u{1FA79}',
        '\u2764',
        '\u{1F9E1}',
        '\u{1F49B}',
        '\u{1F49A}',
        '\u{1F499}',
        '\u{1F49C}',
        '\u{1F90E}',
        '\u{1F5A4}',
        '\u{1F90D}',
        '\u{1F4AF}',
        '\u{1F4A2}',
        '\u{1F4A5}',
        '\u{1F4AB}',
        '\u{1F4A6}',
        '\u{1F4A8}',
        '\u{1F573}',
        '\u{1F4A3}',
        '\u{1F4AC}',
        '\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F',
        '\u{1F5E8}',
        '\u{1F5EF}',
        '\u{1F4AD}',
        '\u{1F4A4}'
      ]
    ],
    [
      'hand-fingers-open',
      ['\u{1F44B}', '\u{1F91A}', '\u{1F590}', '\u270B', '\u{1F596}', '\u{1FAF1}', '\u{1FAF2}', '\u{1FAF3}', '\u{1FAF4}']
    ],
    [
      'hand-fingers-partial',
      ['\u{1F44C}', '\u{1F90C}', '\u{1F90F}', '\u270C', '\u{1F91E}', '\u{1FAF0}', '\u{1F91F}', '\u{1F918}', '\u{1F919}']
    ],
    ['hand-single-finger', ['\u{1F448}', '\u{1F449}', '\u{1F446}', '\u{1F595}', '\u{1F447}', '\u261D', '\u{1FAF5}']],
    ['hand-fingers-closed', ['\u{1F44D}', '\u{1F44E}', '\u270A', '\u{1F44A}', '\u{1F91B}', '\u{1F91C}']],
    ['hands', ['\u{1F44F}', '\u{1F64C}', '\u{1FAF6}', '\u{1F450}', '\u{1F932}', '\u{1F91D}', '\u{1F64F}']],
    ['hand-prop', ['\u270D', '\u{1F485}', '\u{1F933}']],
    [
      'body-parts',
      [
        '\u{1F4AA}',
        '\u{1F9BE}',
        '\u{1F9BF}',
        '\u{1F9B5}',
        '\u{1F9B6}',
        '\u{1F442}',
        '\u{1F9BB}',
        '\u{1F443}',
        '\u{1F9E0}',
        '\u{1FAC0}',
        '\u{1FAC1}',
        '\u{1F9B7}',
        '\u{1F9B4}',
        '\u{1F440}',
        '\u{1F441}',
        '\u{1F445}',
        '\u{1F444}',
        '\u{1FAE6}'
      ]
    ],
    [
      'person',
      [
        '\u{1F476}',
        '\u{1F9D2}',
        '\u{1F466}',
        '\u{1F467}',
        '\u{1F9D1}',
        '\u{1F471}',
        '\u{1F468}',
        '\u{1F9D4}',
        '\u{1F9D4}\u200D\u2642\uFE0F',
        '\u{1F9D4}\u200D\u2640\uFE0F',
        '\u{1F468}\u200D\u{1F9B0}',
        '\u{1F468}\u200D\u{1F9B1}',
        '\u{1F468}\u200D\u{1F9B3}',
        '\u{1F468}\u200D\u{1F9B2}',
        '\u{1F469}',
        '\u{1F469}\u200D\u{1F9B0}',
        '\u{1F9D1}\u200D\u{1F9B0}',
        '\u{1F469}\u200D\u{1F9B1}',
        '\u{1F9D1}\u200D\u{1F9B1}',
        '\u{1F469}\u200D\u{1F9B3}',
        '\u{1F9D1}\u200D\u{1F9B3}',
        '\u{1F469}\u200D\u{1F9B2}',
        '\u{1F9D1}\u200D\u{1F9B2}',
        '\u{1F471}\u200D\u2640\uFE0F',
        '\u{1F471}\u200D\u2642\uFE0F',
        '\u{1F9D3}',
        '\u{1F474}',
        '\u{1F475}'
      ]
    ],
    [
      'person-gesture',
      [
        '\u{1F64D}',
        '\u{1F64D}\u200D\u2642\uFE0F',
        '\u{1F64D}\u200D\u2640\uFE0F',
        '\u{1F64E}',
        '\u{1F64E}\u200D\u2642\uFE0F',
        '\u{1F64E}\u200D\u2640\uFE0F',
        '\u{1F645}',
        '\u{1F645}\u200D\u2642\uFE0F',
        '\u{1F645}\u200D\u2640\uFE0F',
        '\u{1F646}',
        '\u{1F646}\u200D\u2642\uFE0F',
        '\u{1F646}\u200D\u2640\uFE0F',
        '\u{1F481}',
        '\u{1F481}\u200D\u2642\uFE0F',
        '\u{1F481}\u200D\u2640\uFE0F',
        '\u{1F64B}',
        '\u{1F64B}\u200D\u2642\uFE0F',
        '\u{1F64B}\u200D\u2640\uFE0F',
        '\u{1F9CF}',
        '\u{1F9CF}\u200D\u2642\uFE0F',
        '\u{1F9CF}\u200D\u2640\uFE0F',
        '\u{1F647}',
        '\u{1F647}\u200D\u2642\uFE0F',
        '\u{1F647}\u200D\u2640\uFE0F',
        '\u{1F926}',
        '\u{1F926}\u200D\u2642\uFE0F',
        '\u{1F926}\u200D\u2640\uFE0F',
        '\u{1F937}',
        '\u{1F937}\u200D\u2642\uFE0F',
        '\u{1F937}\u200D\u2640\uFE0F'
      ]
    ],
    [
      'person-role',
      [
        '\u{1F9D1}\u200D\u2695\uFE0F',
        '\u{1F468}\u200D\u2695\uFE0F',
        '\u{1F469}\u200D\u2695\uFE0F',
        '\u{1F9D1}\u200D\u{1F393}',
        '\u{1F468}\u200D\u{1F393}',
        '\u{1F469}\u200D\u{1F393}',
        '\u{1F9D1}\u200D\u{1F3EB}',
        '\u{1F468}\u200D\u{1F3EB}',
        '\u{1F469}\u200D\u{1F3EB}',
        '\u{1F9D1}\u200D\u2696\uFE0F',
        '\u{1F468}\u200D\u2696\uFE0F',
        '\u{1F469}\u200D\u2696\uFE0F',
        '\u{1F9D1}\u200D\u{1F33E}',
        '\u{1F468}\u200D\u{1F33E}',
        '\u{1F469}\u200D\u{1F33E}',
        '\u{1F9D1}\u200D\u{1F373}',
        '\u{1F468}\u200D\u{1F373}',
        '\u{1F469}\u200D\u{1F373}',
        '\u{1F9D1}\u200D\u{1F527}',
        '\u{1F468}\u200D\u{1F527}',
        '\u{1F469}\u200D\u{1F527}',
        '\u{1F9D1}\u200D\u{1F3ED}',
        '\u{1F468}\u200D\u{1F3ED}',
        '\u{1F469}\u200D\u{1F3ED}',
        '\u{1F9D1}\u200D\u{1F4BC}',
        '\u{1F468}\u200D\u{1F4BC}',
        '\u{1F469}\u200D\u{1F4BC}',
        '\u{1F9D1}\u200D\u{1F52C}',
        '\u{1F468}\u200D\u{1F52C}',
        '\u{1F469}\u200D\u{1F52C}',
        '\u{1F9D1}\u200D\u{1F4BB}',
        '\u{1F468}\u200D\u{1F4BB}',
        '\u{1F469}\u200D\u{1F4BB}',
        '\u{1F9D1}\u200D\u{1F3A4}',
        '\u{1F468}\u200D\u{1F3A4}',
        '\u{1F469}\u200D\u{1F3A4}',
        '\u{1F9D1}\u200D\u{1F3A8}',
        '\u{1F468}\u200D\u{1F3A8}',
        '\u{1F469}\u200D\u{1F3A8}',
        '\u{1F9D1}\u200D\u2708\uFE0F',
        '\u{1F468}\u200D\u2708\uFE0F',
        '\u{1F469}\u200D\u2708\uFE0F',
        '\u{1F9D1}\u200D\u{1F680}',
        '\u{1F468}\u200D\u{1F680}',
        '\u{1F469}\u200D\u{1F680}',
        '\u{1F9D1}\u200D\u{1F692}',
        '\u{1F468}\u200D\u{1F692}',
        '\u{1F469}\u200D\u{1F692}',
        '\u{1F46E}',
        '\u{1F46E}\u200D\u2642\uFE0F',
        '\u{1F46E}\u200D\u2640\uFE0F',
        '\u{1F575}',
        '\u{1F575}\uFE0F\u200D\u2642\uFE0F',
        '\u{1F575}\uFE0F\u200D\u2640\uFE0F',
        '\u{1F482}',
        '\u{1F482}\u200D\u2642\uFE0F',
        '\u{1F482}\u200D\u2640\uFE0F',
        '\u{1F977}',
        '\u{1F477}',
        '\u{1F477}\u200D\u2642\uFE0F',
        '\u{1F477}\u200D\u2640\uFE0F',
        '\u{1FAC5}',
        '\u{1F934}',
        '\u{1F478}',
        '\u{1F473}',
        '\u{1F473}\u200D\u2642\uFE0F',
        '\u{1F473}\u200D\u2640\uFE0F',
        '\u{1F472}',
        '\u{1F9D5}',
        '\u{1F935}',
        '\u{1F935}\u200D\u2642\uFE0F',
        '\u{1F935}\u200D\u2640\uFE0F',
        '\u{1F470}',
        '\u{1F470}\u200D\u2642\uFE0F',
        '\u{1F470}\u200D\u2640\uFE0F',
        '\u{1F930}',
        '\u{1FAC3}',
        '\u{1FAC4}',
        '\u{1F931}',
        '\u{1F469}\u200D\u{1F37C}',
        '\u{1F468}\u200D\u{1F37C}',
        '\u{1F9D1}\u200D\u{1F37C}'
      ]
    ],
    [
      'person-fantasy',
      [
        '\u{1F47C}',
        '\u{1F385}',
        '\u{1F936}',
        '\u{1F9D1}\u200D\u{1F384}',
        '\u{1F9B8}',
        '\u{1F9B8}\u200D\u2642\uFE0F',
        '\u{1F9B8}\u200D\u2640\uFE0F',
        '\u{1F9B9}',
        '\u{1F9B9}\u200D\u2642\uFE0F',
        '\u{1F9B9}\u200D\u2640\uFE0F',
        '\u{1F9D9}',
        '\u{1F9D9}\u200D\u2642\uFE0F',
        '\u{1F9D9}\u200D\u2640\uFE0F',
        '\u{1F9DA}',
        '\u{1F9DA}\u200D\u2642\uFE0F',
        '\u{1F9DA}\u200D\u2640\uFE0F',
        '\u{1F9DB}',
        '\u{1F9DB}\u200D\u2642\uFE0F',
        '\u{1F9DB}\u200D\u2640\uFE0F',
        '\u{1F9DC}',
        '\u{1F9DC}\u200D\u2642\uFE0F',
        '\u{1F9DC}\u200D\u2640\uFE0F',
        '\u{1F9DD}',
        '\u{1F9DD}\u200D\u2642\uFE0F',
        '\u{1F9DD}\u200D\u2640\uFE0F',
        '\u{1F9DE}',
        '\u{1F9DE}\u200D\u2642\uFE0F',
        '\u{1F9DE}\u200D\u2640\uFE0F',
        '\u{1F9DF}',
        '\u{1F9DF}\u200D\u2642\uFE0F',
        '\u{1F9DF}\u200D\u2640\uFE0F',
        '\u{1F9CC}'
      ]
    ],
    [
      'person-activity',
      [
        '\u{1F486}',
        '\u{1F486}\u200D\u2642\uFE0F',
        '\u{1F486}\u200D\u2640\uFE0F',
        '\u{1F487}',
        '\u{1F487}\u200D\u2642\uFE0F',
        '\u{1F487}\u200D\u2640\uFE0F',
        '\u{1F6B6}',
        '\u{1F6B6}\u200D\u2642\uFE0F',
        '\u{1F6B6}\u200D\u2640\uFE0F',
        '\u{1F9CD}',
        '\u{1F9CD}\u200D\u2642\uFE0F',
        '\u{1F9CD}\u200D\u2640\uFE0F',
        '\u{1F9CE}',
        '\u{1F9CE}\u200D\u2642\uFE0F',
        '\u{1F9CE}\u200D\u2640\uFE0F',
        '\u{1F9D1}\u200D\u{1F9AF}',
        '\u{1F468}\u200D\u{1F9AF}',
        '\u{1F469}\u200D\u{1F9AF}',
        '\u{1F9D1}\u200D\u{1F9BC}',
        '\u{1F468}\u200D\u{1F9BC}',
        '\u{1F469}\u200D\u{1F9BC}',
        '\u{1F9D1}\u200D\u{1F9BD}',
        '\u{1F468}\u200D\u{1F9BD}',
        '\u{1F469}\u200D\u{1F9BD}',
        '\u{1F3C3}',
        '\u{1F3C3}\u200D\u2642\uFE0F',
        '\u{1F3C3}\u200D\u2640\uFE0F',
        '\u{1F483}',
        '\u{1F57A}',
        '\u{1F574}',
        '\u{1F46F}',
        '\u{1F46F}\u200D\u2642\uFE0F',
        '\u{1F46F}\u200D\u2640\uFE0F',
        '\u{1F9D6}',
        '\u{1F9D6}\u200D\u2642\uFE0F',
        '\u{1F9D6}\u200D\u2640\uFE0F',
        '\u{1F9D7}',
        '\u{1F9D7}\u200D\u2642\uFE0F',
        '\u{1F9D7}\u200D\u2640\uFE0F'
      ]
    ],
    [
      'person-sport',
      [
        '\u{1F93A}',
        '\u{1F3C7}',
        '\u26F7',
        '\u{1F3C2}',
        '\u{1F3CC}',
        '\u{1F3CC}\uFE0F\u200D\u2642\uFE0F',
        '\u{1F3CC}\uFE0F\u200D\u2640\uFE0F',
        '\u{1F3C4}',
        '\u{1F3C4}\u200D\u2642\uFE0F',
        '\u{1F3C4}\u200D\u2640\uFE0F',
        '\u{1F6A3}',
        '\u{1F6A3}\u200D\u2642\uFE0F',
        '\u{1F6A3}\u200D\u2640\uFE0F',
        '\u{1F3CA}',
        '\u{1F3CA}\u200D\u2642\uFE0F',
        '\u{1F3CA}\u200D\u2640\uFE0F',
        '\u26F9',
        '\u26F9\uFE0F\u200D\u2642\uFE0F',
        '\u26F9\uFE0F\u200D\u2640\uFE0F',
        '\u{1F3CB}',
        '\u{1F3CB}\uFE0F\u200D\u2642\uFE0F',
        '\u{1F3CB}\uFE0F\u200D\u2640\uFE0F',
        '\u{1F6B4}',
        '\u{1F6B4}\u200D\u2642\uFE0F',
        '\u{1F6B4}\u200D\u2640\uFE0F',
        '\u{1F6B5}',
        '\u{1F6B5}\u200D\u2642\uFE0F',
        '\u{1F6B5}\u200D\u2640\uFE0F',
        '\u{1F938}',
        '\u{1F938}\u200D\u2642\uFE0F',
        '\u{1F938}\u200D\u2640\uFE0F',
        '\u{1F93C}',
        '\u{1F93C}\u200D\u2642\uFE0F',
        '\u{1F93C}\u200D\u2640\uFE0F',
        '\u{1F93D}',
        '\u{1F93D}\u200D\u2642\uFE0F',
        '\u{1F93D}\u200D\u2640\uFE0F',
        '\u{1F93E}',
        '\u{1F93E}\u200D\u2642\uFE0F',
        '\u{1F93E}\u200D\u2640\uFE0F',
        '\u{1F939}',
        '\u{1F939}\u200D\u2642\uFE0F',
        '\u{1F939}\u200D\u2640\uFE0F'
      ]
    ],
    [
      'person-resting',
      ['\u{1F9D8}', '\u{1F9D8}\u200D\u2642\uFE0F', '\u{1F9D8}\u200D\u2640\uFE0F', '\u{1F6C0}', '\u{1F6CC}']
    ],
    [
      'family',
      [
        '\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}',
        '\u{1F46D}',
        '\u{1F46B}',
        '\u{1F46C}',
        '\u{1F48F}',
        '\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}',
        '\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}',
        '\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}',
        '\u{1F491}',
        '\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}',
        '\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}',
        '\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}',
        '\u{1F46A}',
        '\u{1F468}\u200D\u{1F469}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}',
        '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}',
        '\u{1F468}\u200D\u{1F468}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F468}\u200D\u{1F467}',
        '\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}',
        '\u{1F469}\u200D\u{1F469}\u200D\u{1F466}',
        '\u{1F469}\u200D\u{1F469}\u200D\u{1F467}',
        '\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}',
        '\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}',
        '\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}',
        '\u{1F468}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F466}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F467}',
        '\u{1F468}\u200D\u{1F467}\u200D\u{1F466}',
        '\u{1F468}\u200D\u{1F467}\u200D\u{1F467}',
        '\u{1F469}\u200D\u{1F466}',
        '\u{1F469}\u200D\u{1F466}\u200D\u{1F466}',
        '\u{1F469}\u200D\u{1F467}',
        '\u{1F469}\u200D\u{1F467}\u200D\u{1F466}',
        '\u{1F469}\u200D\u{1F467}\u200D\u{1F467}'
      ]
    ],
    ['person-symbol', ['\u{1F5E3}', '\u{1F464}', '\u{1F465}', '\u{1FAC2}', '\u{1F463}']],
    ['hair-style', ['\u{1F9B0}', '\u{1F9B1}', '\u{1F9B3}', '\u{1F9B2}']],
    [
      'animal-mammal',
      [
        '\u{1F435}',
        '\u{1F412}',
        '\u{1F98D}',
        '\u{1F9A7}',
        '\u{1F436}',
        '\u{1F415}',
        '\u{1F9AE}',
        '\u{1F415}\u200D\u{1F9BA}',
        '\u{1F429}',
        '\u{1F43A}',
        '\u{1F98A}',
        '\u{1F99D}',
        '\u{1F431}',
        '\u{1F408}',
        '\u{1F408}\u200D\u2B1B',
        '\u{1F981}',
        '\u{1F42F}',
        '\u{1F405}',
        '\u{1F406}',
        '\u{1F434}',
        '\u{1F40E}',
        '\u{1F984}',
        '\u{1F993}',
        '\u{1F98C}',
        '\u{1F9AC}',
        '\u{1F42E}',
        '\u{1F402}',
        '\u{1F403}',
        '\u{1F404}',
        '\u{1F437}',
        '\u{1F416}',
        '\u{1F417}',
        '\u{1F43D}',
        '\u{1F40F}',
        '\u{1F411}',
        '\u{1F410}',
        '\u{1F42A}',
        '\u{1F42B}',
        '\u{1F999}',
        '\u{1F992}',
        '\u{1F418}',
        '\u{1F9A3}',
        '\u{1F98F}',
        '\u{1F99B}',
        '\u{1F42D}',
        '\u{1F401}',
        '\u{1F400}',
        '\u{1F439}',
        '\u{1F430}',
        '\u{1F407}',
        '\u{1F43F}',
        '\u{1F9AB}',
        '\u{1F994}',
        '\u{1F987}',
        '\u{1F43B}',
        '\u{1F43B}\u200D\u2744\uFE0F',
        '\u{1F428}',
        '\u{1F43C}',
        '\u{1F9A5}',
        '\u{1F9A6}',
        '\u{1F9A8}',
        '\u{1F998}',
        '\u{1F9A1}',
        '\u{1F43E}'
      ]
    ],
    [
      'animal-bird',
      [
        '\u{1F983}',
        '\u{1F414}',
        '\u{1F413}',
        '\u{1F423}',
        '\u{1F424}',
        '\u{1F425}',
        '\u{1F426}',
        '\u{1F427}',
        '\u{1F54A}',
        '\u{1F985}',
        '\u{1F986}',
        '\u{1F9A2}',
        '\u{1F989}',
        '\u{1F9A4}',
        '\u{1FAB6}',
        '\u{1F9A9}',
        '\u{1F99A}',
        '\u{1F99C}'
      ]
    ],
    ['animal-amphibian', ['\u{1F438}']],
    [
      'animal-reptile',
      ['\u{1F40A}', '\u{1F422}', '\u{1F98E}', '\u{1F40D}', '\u{1F432}', '\u{1F409}', '\u{1F995}', '\u{1F996}']
    ],
    [
      'animal-marine',
      [
        '\u{1F433}',
        '\u{1F40B}',
        '\u{1F42C}',
        '\u{1F9AD}',
        '\u{1F41F}',
        '\u{1F420}',
        '\u{1F421}',
        '\u{1F988}',
        '\u{1F419}',
        '\u{1F41A}',
        '\u{1FAB8}'
      ]
    ],
    [
      'animal-bug',
      [
        '\u{1F40C}',
        '\u{1F98B}',
        '\u{1F41B}',
        '\u{1F41C}',
        '\u{1F41D}',
        '\u{1FAB2}',
        '\u{1F41E}',
        '\u{1F997}',
        '\u{1FAB3}',
        '\u{1F577}',
        '\u{1F578}',
        '\u{1F982}',
        '\u{1F99F}',
        '\u{1FAB0}',
        '\u{1FAB1}',
        '\u{1F9A0}'
      ]
    ],
    [
      'plant-flower',
      [
        '\u{1F490}',
        '\u{1F338}',
        '\u{1F4AE}',
        '\u{1FAB7}',
        '\u{1F3F5}',
        '\u{1F339}',
        '\u{1F940}',
        '\u{1F33A}',
        '\u{1F33B}',
        '\u{1F33C}',
        '\u{1F337}'
      ]
    ],
    [
      'plant-other',
      [
        '\u{1F331}',
        '\u{1FAB4}',
        '\u{1F332}',
        '\u{1F333}',
        '\u{1F334}',
        '\u{1F335}',
        '\u{1F33E}',
        '\u{1F33F}',
        '\u2618',
        '\u{1F340}',
        '\u{1F341}',
        '\u{1F342}',
        '\u{1F343}',
        '\u{1FAB9}',
        '\u{1FABA}'
      ]
    ],
    [
      'food-fruit',
      [
        '\u{1F347}',
        '\u{1F348}',
        '\u{1F349}',
        '\u{1F34A}',
        '\u{1F34B}',
        '\u{1F34C}',
        '\u{1F34D}',
        '\u{1F96D}',
        '\u{1F34E}',
        '\u{1F34F}',
        '\u{1F350}',
        '\u{1F351}',
        '\u{1F352}',
        '\u{1F353}',
        '\u{1FAD0}',
        '\u{1F95D}',
        '\u{1F345}',
        '\u{1FAD2}',
        '\u{1F965}'
      ]
    ],
    [
      'food-vegetable',
      [
        '\u{1F951}',
        '\u{1F346}',
        '\u{1F954}',
        '\u{1F955}',
        '\u{1F33D}',
        '\u{1F336}',
        '\u{1FAD1}',
        '\u{1F952}',
        '\u{1F96C}',
        '\u{1F966}',
        '\u{1F9C4}',
        '\u{1F9C5}',
        '\u{1F344}',
        '\u{1F95C}',
        '\u{1FAD8}',
        '\u{1F330}'
      ]
    ],
    [
      'food-prepared',
      [
        '\u{1F35E}',
        '\u{1F950}',
        '\u{1F956}',
        '\u{1FAD3}',
        '\u{1F968}',
        '\u{1F96F}',
        '\u{1F95E}',
        '\u{1F9C7}',
        '\u{1F9C0}',
        '\u{1F356}',
        '\u{1F357}',
        '\u{1F969}',
        '\u{1F953}',
        '\u{1F354}',
        '\u{1F35F}',
        '\u{1F355}',
        '\u{1F32D}',
        '\u{1F96A}',
        '\u{1F32E}',
        '\u{1F32F}',
        '\u{1FAD4}',
        '\u{1F959}',
        '\u{1F9C6}',
        '\u{1F95A}',
        '\u{1F373}',
        '\u{1F958}',
        '\u{1F372}',
        '\u{1FAD5}',
        '\u{1F963}',
        '\u{1F957}',
        '\u{1F37F}',
        '\u{1F9C8}',
        '\u{1F9C2}',
        '\u{1F96B}'
      ]
    ],
    [
      'food-asian',
      [
        '\u{1F371}',
        '\u{1F358}',
        '\u{1F359}',
        '\u{1F35A}',
        '\u{1F35B}',
        '\u{1F35C}',
        '\u{1F35D}',
        '\u{1F360}',
        '\u{1F362}',
        '\u{1F363}',
        '\u{1F364}',
        '\u{1F365}',
        '\u{1F96E}',
        '\u{1F361}',
        '\u{1F95F}',
        '\u{1F960}',
        '\u{1F961}'
      ]
    ],
    ['food-marine', ['\u{1F980}', '\u{1F99E}', '\u{1F990}', '\u{1F991}', '\u{1F9AA}']],
    [
      'food-sweet',
      [
        '\u{1F366}',
        '\u{1F367}',
        '\u{1F368}',
        '\u{1F369}',
        '\u{1F36A}',
        '\u{1F382}',
        '\u{1F370}',
        '\u{1F9C1}',
        '\u{1F967}',
        '\u{1F36B}',
        '\u{1F36C}',
        '\u{1F36D}',
        '\u{1F36E}',
        '\u{1F36F}'
      ]
    ],
    [
      'drink',
      [
        '\u{1F37C}',
        '\u{1F95B}',
        '\u2615',
        '\u{1FAD6}',
        '\u{1F375}',
        '\u{1F376}',
        '\u{1F37E}',
        '\u{1F377}',
        '\u{1F378}',
        '\u{1F379}',
        '\u{1F37A}',
        '\u{1F37B}',
        '\u{1F942}',
        '\u{1F943}',
        '\u{1FAD7}',
        '\u{1F964}',
        '\u{1F9CB}',
        '\u{1F9C3}',
        '\u{1F9C9}',
        '\u{1F9CA}'
      ]
    ],
    ['dishware', ['\u{1F962}', '\u{1F37D}', '\u{1F374}', '\u{1F944}', '\u{1F52A}', '\u{1FAD9}', '\u{1F3FA}']],
    ['place-map', ['\u{1F30D}', '\u{1F30E}', '\u{1F30F}', '\u{1F310}', '\u{1F5FA}', '\u{1F5FE}', '\u{1F9ED}']],
    [
      'place-geographic',
      ['\u{1F3D4}', '\u26F0', '\u{1F30B}', '\u{1F5FB}', '\u{1F3D5}', '\u{1F3D6}', '\u{1F3DC}', '\u{1F3DD}', '\u{1F3DE}']
    ],
    [
      'place-building',
      [
        '\u{1F3DF}',
        '\u{1F3DB}',
        '\u{1F3D7}',
        '\u{1F9F1}',
        '\u{1FAA8}',
        '\u{1FAB5}',
        '\u{1F6D6}',
        '\u{1F3D8}',
        '\u{1F3DA}',
        '\u{1F3E0}',
        '\u{1F3E1}',
        '\u{1F3E2}',
        '\u{1F3E3}',
        '\u{1F3E4}',
        '\u{1F3E5}',
        '\u{1F3E6}',
        '\u{1F3E8}',
        '\u{1F3E9}',
        '\u{1F3EA}',
        '\u{1F3EB}',
        '\u{1F3EC}',
        '\u{1F3ED}',
        '\u{1F3EF}',
        '\u{1F3F0}',
        '\u{1F492}',
        '\u{1F5FC}',
        '\u{1F5FD}'
      ]
    ],
    ['place-religious', ['\u26EA', '\u{1F54C}', '\u{1F6D5}', '\u{1F54D}', '\u26E9', '\u{1F54B}']],
    [
      'place-other',
      [
        '\u26F2',
        '\u26FA',
        '\u{1F301}',
        '\u{1F303}',
        '\u{1F3D9}',
        '\u{1F304}',
        '\u{1F305}',
        '\u{1F306}',
        '\u{1F307}',
        '\u{1F309}',
        '\u2668',
        '\u{1F3A0}',
        '\u{1F6DD}',
        '\u{1F3A1}',
        '\u{1F3A2}',
        '\u{1F488}',
        '\u{1F3AA}'
      ]
    ],
    [
      'transport-ground',
      [
        '\u{1F682}',
        '\u{1F683}',
        '\u{1F684}',
        '\u{1F685}',
        '\u{1F686}',
        '\u{1F687}',
        '\u{1F688}',
        '\u{1F689}',
        '\u{1F68A}',
        '\u{1F69D}',
        '\u{1F69E}',
        '\u{1F68B}',
        '\u{1F68C}',
        '\u{1F68D}',
        '\u{1F68E}',
        '\u{1F690}',
        '\u{1F691}',
        '\u{1F692}',
        '\u{1F693}',
        '\u{1F694}',
        '\u{1F695}',
        '\u{1F696}',
        '\u{1F697}',
        '\u{1F698}',
        '\u{1F699}',
        '\u{1F6FB}',
        '\u{1F69A}',
        '\u{1F69B}',
        '\u{1F69C}',
        '\u{1F3CE}',
        '\u{1F3CD}',
        '\u{1F6F5}',
        '\u{1F9BD}',
        '\u{1F9BC}',
        '\u{1F6FA}',
        '\u{1F6B2}',
        '\u{1F6F4}',
        '\u{1F6F9}',
        '\u{1F6FC}',
        '\u{1F68F}',
        '\u{1F6E3}',
        '\u{1F6E4}',
        '\u{1F6E2}',
        '\u26FD',
        '\u{1F6DE}',
        '\u{1F6A8}',
        '\u{1F6A5}',
        '\u{1F6A6}',
        '\u{1F6D1}',
        '\u{1F6A7}'
      ]
    ],
    [
      'transport-water',
      ['\u2693', '\u{1F6DF}', '\u26F5', '\u{1F6F6}', '\u{1F6A4}', '\u{1F6F3}', '\u26F4', '\u{1F6E5}', '\u{1F6A2}']
    ],
    [
      'transport-air',
      [
        '\u2708',
        '\u{1F6E9}',
        '\u{1F6EB}',
        '\u{1F6EC}',
        '\u{1FA82}',
        '\u{1F4BA}',
        '\u{1F681}',
        '\u{1F69F}',
        '\u{1F6A0}',
        '\u{1F6A1}',
        '\u{1F6F0}',
        '\u{1F680}',
        '\u{1F6F8}'
      ]
    ],
    ['hotel', ['\u{1F6CE}', '\u{1F9F3}']],
    [
      'time',
      [
        '\u231B',
        '\u23F3',
        '\u231A',
        '\u23F0',
        '\u23F1',
        '\u23F2',
        '\u{1F570}',
        '\u{1F55B}',
        '\u{1F567}',
        '\u{1F550}',
        '\u{1F55C}',
        '\u{1F551}',
        '\u{1F55D}',
        '\u{1F552}',
        '\u{1F55E}',
        '\u{1F553}',
        '\u{1F55F}',
        '\u{1F554}',
        '\u{1F560}',
        '\u{1F555}',
        '\u{1F561}',
        '\u{1F556}',
        '\u{1F562}',
        '\u{1F557}',
        '\u{1F563}',
        '\u{1F558}',
        '\u{1F564}',
        '\u{1F559}',
        '\u{1F565}',
        '\u{1F55A}',
        '\u{1F566}'
      ]
    ],
    [
      'sky & weather',
      [
        '\u{1F311}',
        '\u{1F312}',
        '\u{1F313}',
        '\u{1F314}',
        '\u{1F315}',
        '\u{1F316}',
        '\u{1F317}',
        '\u{1F318}',
        '\u{1F319}',
        '\u{1F31A}',
        '\u{1F31B}',
        '\u{1F31C}',
        '\u{1F321}',
        '\u2600',
        '\u{1F31D}',
        '\u{1F31E}',
        '\u{1FA90}',
        '\u2B50',
        '\u{1F31F}',
        '\u{1F320}',
        '\u{1F30C}',
        '\u2601',
        '\u26C5',
        '\u26C8',
        '\u{1F324}',
        '\u{1F325}',
        '\u{1F326}',
        '\u{1F327}',
        '\u{1F328}',
        '\u{1F329}',
        '\u{1F32A}',
        '\u{1F32B}',
        '\u{1F32C}',
        '\u{1F300}',
        '\u{1F308}',
        '\u{1F302}',
        '\u2602',
        '\u2614',
        '\u26F1',
        '\u26A1',
        '\u2744',
        '\u2603',
        '\u26C4',
        '\u2604',
        '\u{1F525}',
        '\u{1F4A7}',
        '\u{1F30A}'
      ]
    ],
    [
      'event',
      [
        '\u{1F383}',
        '\u{1F384}',
        '\u{1F386}',
        '\u{1F387}',
        '\u{1F9E8}',
        '\u2728',
        '\u{1F388}',
        '\u{1F389}',
        '\u{1F38A}',
        '\u{1F38B}',
        '\u{1F38D}',
        '\u{1F38E}',
        '\u{1F38F}',
        '\u{1F390}',
        '\u{1F391}',
        '\u{1F9E7}',
        '\u{1F380}',
        '\u{1F381}',
        '\u{1F397}',
        '\u{1F39F}',
        '\u{1F3AB}'
      ]
    ],
    ['award-medal', ['\u{1F396}', '\u{1F3C6}', '\u{1F3C5}', '\u{1F947}', '\u{1F948}', '\u{1F949}']],
    [
      'sport',
      [
        '\u26BD',
        '\u26BE',
        '\u{1F94E}',
        '\u{1F3C0}',
        '\u{1F3D0}',
        '\u{1F3C8}',
        '\u{1F3C9}',
        '\u{1F3BE}',
        '\u{1F94F}',
        '\u{1F3B3}',
        '\u{1F3CF}',
        '\u{1F3D1}',
        '\u{1F3D2}',
        '\u{1F94D}',
        '\u{1F3D3}',
        '\u{1F3F8}',
        '\u{1F94A}',
        '\u{1F94B}',
        '\u{1F945}',
        '\u26F3',
        '\u26F8',
        '\u{1F3A3}',
        '\u{1F93F}',
        '\u{1F3BD}',
        '\u{1F3BF}',
        '\u{1F6F7}',
        '\u{1F94C}'
      ]
    ],
    [
      'game',
      [
        '\u{1F3AF}',
        '\u{1FA80}',
        '\u{1FA81}',
        '\u{1F3B1}',
        '\u{1F52E}',
        '\u{1FA84}',
        '\u{1F9FF}',
        '\u{1FAAC}',
        '\u{1F3AE}',
        '\u{1F579}',
        '\u{1F3B0}',
        '\u{1F3B2}',
        '\u{1F9E9}',
        '\u{1F9F8}',
        '\u{1FA85}',
        '\u{1FAA9}',
        '\u{1FA86}',
        '\u2660',
        '\u2665',
        '\u2666',
        '\u2663',
        '\u265F',
        '\u{1F0CF}',
        '\u{1F004}',
        '\u{1F3B4}'
      ]
    ],
    ['arts & crafts', ['\u{1F3AD}', '\u{1F5BC}', '\u{1F3A8}', '\u{1F9F5}', '\u{1FAA1}', '\u{1F9F6}', '\u{1FAA2}']],
    [
      'clothing',
      [
        '\u{1F453}',
        '\u{1F576}',
        '\u{1F97D}',
        '\u{1F97C}',
        '\u{1F9BA}',
        '\u{1F454}',
        '\u{1F455}',
        '\u{1F456}',
        '\u{1F9E3}',
        '\u{1F9E4}',
        '\u{1F9E5}',
        '\u{1F9E6}',
        '\u{1F457}',
        '\u{1F458}',
        '\u{1F97B}',
        '\u{1FA71}',
        '\u{1FA72}',
        '\u{1FA73}',
        '\u{1F459}',
        '\u{1F45A}',
        '\u{1F45B}',
        '\u{1F45C}',
        '\u{1F45D}',
        '\u{1F6CD}',
        '\u{1F392}',
        '\u{1FA74}',
        '\u{1F45E}',
        '\u{1F45F}',
        '\u{1F97E}',
        '\u{1F97F}',
        '\u{1F460}',
        '\u{1F461}',
        '\u{1FA70}',
        '\u{1F462}',
        '\u{1F451}',
        '\u{1F452}',
        '\u{1F3A9}',
        '\u{1F393}',
        '\u{1F9E2}',
        '\u{1FA96}',
        '\u26D1',
        '\u{1F4FF}',
        '\u{1F484}',
        '\u{1F48D}',
        '\u{1F48E}'
      ]
    ],
    [
      'sound',
      [
        '\u{1F507}',
        '\u{1F508}',
        '\u{1F509}',
        '\u{1F50A}',
        '\u{1F4E2}',
        '\u{1F4E3}',
        '\u{1F4EF}',
        '\u{1F514}',
        '\u{1F515}'
      ]
    ],
    [
      'music',
      [
        '\u{1F3BC}',
        '\u{1F3B5}',
        '\u{1F3B6}',
        '\u{1F399}',
        '\u{1F39A}',
        '\u{1F39B}',
        '\u{1F3A4}',
        '\u{1F3A7}',
        '\u{1F4FB}'
      ]
    ],
    [
      'musical-instrument',
      [
        '\u{1F3B7}',
        '\u{1FA97}',
        '\u{1F3B8}',
        '\u{1F3B9}',
        '\u{1F3BA}',
        '\u{1F3BB}',
        '\u{1FA95}',
        '\u{1F941}',
        '\u{1FA98}'
      ]
    ],
    ['phone', ['\u{1F4F1}', '\u{1F4F2}', '\u260E', '\u{1F4DE}', '\u{1F4DF}', '\u{1F4E0}']],
    [
      'computer',
      [
        '\u{1F50B}',
        '\u{1FAAB}',
        '\u{1F50C}',
        '\u{1F4BB}',
        '\u{1F5A5}',
        '\u{1F5A8}',
        '\u2328',
        '\u{1F5B1}',
        '\u{1F5B2}',
        '\u{1F4BD}',
        '\u{1F4BE}',
        '\u{1F4BF}',
        '\u{1F4C0}',
        '\u{1F9EE}'
      ]
    ],
    [
      'light & video',
      [
        '\u{1F3A5}',
        '\u{1F39E}',
        '\u{1F4FD}',
        '\u{1F3AC}',
        '\u{1F4FA}',
        '\u{1F4F7}',
        '\u{1F4F8}',
        '\u{1F4F9}',
        '\u{1F4FC}',
        '\u{1F50D}',
        '\u{1F50E}',
        '\u{1F56F}',
        '\u{1F4A1}',
        '\u{1F526}',
        '\u{1F3EE}',
        '\u{1FA94}'
      ]
    ],
    [
      'book-paper',
      [
        '\u{1F4D4}',
        '\u{1F4D5}',
        '\u{1F4D6}',
        '\u{1F4D7}',
        '\u{1F4D8}',
        '\u{1F4D9}',
        '\u{1F4DA}',
        '\u{1F4D3}',
        '\u{1F4D2}',
        '\u{1F4C3}',
        '\u{1F4DC}',
        '\u{1F4C4}',
        '\u{1F4F0}',
        '\u{1F5DE}',
        '\u{1F4D1}',
        '\u{1F516}',
        '\u{1F3F7}'
      ]
    ],
    [
      'money',
      [
        '\u{1F4B0}',
        '\u{1FA99}',
        '\u{1F4B4}',
        '\u{1F4B5}',
        '\u{1F4B6}',
        '\u{1F4B7}',
        '\u{1F4B8}',
        '\u{1F4B3}',
        '\u{1F9FE}',
        '\u{1F4B9}'
      ]
    ],
    [
      'mail',
      [
        '\u2709',
        '\u{1F4E7}',
        '\u{1F4E8}',
        '\u{1F4E9}',
        '\u{1F4E4}',
        '\u{1F4E5}',
        '\u{1F4E6}',
        '\u{1F4EB}',
        '\u{1F4EA}',
        '\u{1F4EC}',
        '\u{1F4ED}',
        '\u{1F4EE}',
        '\u{1F5F3}'
      ]
    ],
    ['writing', ['\u270F', '\u2712', '\u{1F58B}', '\u{1F58A}', '\u{1F58C}', '\u{1F58D}', '\u{1F4DD}']],
    [
      'office',
      [
        '\u{1F4BC}',
        '\u{1F4C1}',
        '\u{1F4C2}',
        '\u{1F5C2}',
        '\u{1F4C5}',
        '\u{1F4C6}',
        '\u{1F5D2}',
        '\u{1F5D3}',
        '\u{1F4C7}',
        '\u{1F4C8}',
        '\u{1F4C9}',
        '\u{1F4CA}',
        '\u{1F4CB}',
        '\u{1F4CC}',
        '\u{1F4CD}',
        '\u{1F4CE}',
        '\u{1F587}',
        '\u{1F4CF}',
        '\u{1F4D0}',
        '\u2702',
        '\u{1F5C3}',
        '\u{1F5C4}',
        '\u{1F5D1}'
      ]
    ],
    ['lock', ['\u{1F512}', '\u{1F513}', '\u{1F50F}', '\u{1F510}', '\u{1F511}', '\u{1F5DD}']],
    [
      'tool',
      [
        '\u{1F528}',
        '\u{1FA93}',
        '\u26CF',
        '\u2692',
        '\u{1F6E0}',
        '\u{1F5E1}',
        '\u2694',
        '\u{1F52B}',
        '\u{1FA83}',
        '\u{1F3F9}',
        '\u{1F6E1}',
        '\u{1FA9A}',
        '\u{1F527}',
        '\u{1FA9B}',
        '\u{1F529}',
        '\u2699',
        '\u{1F5DC}',
        '\u2696',
        '\u{1F9AF}',
        '\u{1F517}',
        '\u26D3',
        '\u{1FA9D}',
        '\u{1F9F0}',
        '\u{1F9F2}',
        '\u{1FA9C}'
      ]
    ],
    ['science', ['\u2697', '\u{1F9EA}', '\u{1F9EB}', '\u{1F9EC}', '\u{1F52C}', '\u{1F52D}', '\u{1F4E1}']],
    ['medical', ['\u{1F489}', '\u{1FA78}', '\u{1F48A}', '\u{1FA79}', '\u{1FA7C}', '\u{1FA7A}', '\u{1FA7B}']],
    [
      'household',
      [
        '\u{1F6AA}',
        '\u{1F6D7}',
        '\u{1FA9E}',
        '\u{1FA9F}',
        '\u{1F6CF}',
        '\u{1F6CB}',
        '\u{1FA91}',
        '\u{1F6BD}',
        '\u{1FAA0}',
        '\u{1F6BF}',
        '\u{1F6C1}',
        '\u{1FAA4}',
        '\u{1FA92}',
        '\u{1F9F4}',
        '\u{1F9F7}',
        '\u{1F9F9}',
        '\u{1F9FA}',
        '\u{1F9FB}',
        '\u{1FAA3}',
        '\u{1F9FC}',
        '\u{1FAE7}',
        '\u{1FAA5}',
        '\u{1F9FD}',
        '\u{1F9EF}',
        '\u{1F6D2}'
      ]
    ],
    ['other-object', ['\u{1F6AC}', '\u26B0', '\u{1FAA6}', '\u26B1', '\u{1F5FF}', '\u{1FAA7}', '\u{1FAAA}']],
    [
      'transport-sign',
      [
        '\u{1F3E7}',
        '\u{1F6AE}',
        '\u{1F6B0}',
        '\u267F',
        '\u{1F6B9}',
        '\u{1F6BA}',
        '\u{1F6BB}',
        '\u{1F6BC}',
        '\u{1F6BE}',
        '\u{1F6C2}',
        '\u{1F6C3}',
        '\u{1F6C4}',
        '\u{1F6C5}'
      ]
    ],
    [
      'warning',
      [
        '\u26A0',
        '\u{1F6B8}',
        '\u26D4',
        '\u{1F6AB}',
        '\u{1F6B3}',
        '\u{1F6AD}',
        '\u{1F6AF}',
        '\u{1F6B1}',
        '\u{1F6B7}',
        '\u{1F4F5}',
        '\u{1F51E}',
        '\u2622',
        '\u2623'
      ]
    ],
    [
      'arrow',
      [
        '\u2B06',
        '\u2197',
        '\u27A1',
        '\u2198',
        '\u2B07',
        '\u2199',
        '\u2B05',
        '\u2196',
        '\u2195',
        '\u2194',
        '\u21A9',
        '\u21AA',
        '\u2934',
        '\u2935',
        '\u{1F503}',
        '\u{1F504}',
        '\u{1F519}',
        '\u{1F51A}',
        '\u{1F51B}',
        '\u{1F51C}',
        '\u{1F51D}'
      ]
    ],
    [
      'religion',
      [
        '\u{1F6D0}',
        '\u269B',
        '\u{1F549}',
        '\u2721',
        '\u2638',
        '\u262F',
        '\u271D',
        '\u2626',
        '\u262A',
        '\u262E',
        '\u{1F54E}',
        '\u{1F52F}'
      ]
    ],
    [
      'zodiac',
      [
        '\u2648',
        '\u2649',
        '\u264A',
        '\u264B',
        '\u264C',
        '\u264D',
        '\u264E',
        '\u264F',
        '\u2650',
        '\u2651',
        '\u2652',
        '\u2653',
        '\u26CE'
      ]
    ],
    [
      'av-symbol',
      [
        '\u{1F500}',
        '\u{1F501}',
        '\u{1F502}',
        '\u25B6',
        '\u23E9',
        '\u23ED',
        '\u23EF',
        '\u25C0',
        '\u23EA',
        '\u23EE',
        '\u{1F53C}',
        '\u23EB',
        '\u{1F53D}',
        '\u23EC',
        '\u23F8',
        '\u23F9',
        '\u23FA',
        '\u23CF',
        '\u{1F3A6}',
        '\u{1F505}',
        '\u{1F506}',
        '\u{1F4F6}',
        '\u{1F4F3}',
        '\u{1F4F4}'
      ]
    ],
    ['gender', ['\u2640', '\u2642', '\u26A7']],
    ['math', ['\u2716', '\u2795', '\u2796', '\u2797', '\u{1F7F0}', '\u267E']],
    ['punctuation', ['\u203C', '\u2049', '\u2753', '\u2754', '\u2755', '\u2757', '\u3030']],
    ['currency', ['\u{1F4B1}', '\u{1F4B2}']],
    [
      'other-symbol',
      [
        '\u2695',
        '\u267B',
        '\u269C',
        '\u{1F531}',
        '\u{1F4DB}',
        '\u{1F530}',
        '\u2B55',
        '\u2705',
        '\u2611',
        '\u2714',
        '\u274C',
        '\u274E',
        '\u27B0',
        '\u27BF',
        '\u303D',
        '\u2733',
        '\u2734',
        '\u2747',
        '\xA9',
        '\xAE',
        '\u2122'
      ]
    ],
    [
      'keycap',
      [
        '#\uFE0F \u20E3',
        '*\uFE0F \u20E3',
        '0\uFE0F \u20E3',
        '1\uFE0F \u20E3',
        '2\uFE0F \u20E3',
        '3\uFE0F \u20E3',
        '4\uFE0F \u20E3',
        '5\uFE0F \u20E3',
        '6\uFE0F \u20E3',
        '7\uFE0F \u20E3',
        '8\uFE0F \u20E3',
        '9\uFE0F \u20E3',
        '\u{1F51F}'
      ]
    ],
    [
      'alphanum',
      [
        '\u{1F520}',
        '\u{1F521}',
        '\u{1F522}',
        '\u{1F523}',
        '\u{1F524}',
        '\u{1F170}',
        '\u{1F18E}',
        '\u{1F171}',
        '\u{1F191}',
        '\u{1F192}',
        '\u{1F193}',
        '\u2139',
        '\u{1F194}',
        '\u24C2',
        '\u{1F195}',
        '\u{1F196}',
        '\u{1F17E}',
        '\u{1F197}',
        '\u{1F17F}',
        '\u{1F198}',
        '\u{1F199}',
        '\u{1F19A}',
        '\u{1F201}',
        '\u{1F202}',
        '\u{1F237}',
        '\u{1F236}',
        '\u{1F22F}',
        '\u{1F250}',
        '\u{1F239}',
        '\u{1F21A}',
        '\u{1F232}',
        '\u{1F251}',
        '\u{1F238}',
        '\u{1F234}',
        '\u{1F233}',
        '\u3297',
        '\u3299',
        '\u{1F23A}',
        '\u{1F235}'
      ]
    ],
    [
      'geometric',
      [
        '\u{1F534}',
        '\u{1F7E0}',
        '\u{1F7E1}',
        '\u{1F7E2}',
        '\u{1F535}',
        '\u{1F7E3}',
        '\u{1F7E4}',
        '\u26AB',
        '\u26AA',
        '\u{1F7E5}',
        '\u{1F7E7}',
        '\u{1F7E8}',
        '\u{1F7E9}',
        '\u{1F7E6}',
        '\u{1F7EA}',
        '\u{1F7EB}',
        '\u2B1B',
        '\u2B1C',
        '\u25FC',
        '\u25FB',
        '\u25FE',
        '\u25FD',
        '\u25AA',
        '\u25AB',
        '\u{1F536}',
        '\u{1F537}',
        '\u{1F538}',
        '\u{1F539}',
        '\u{1F53A}',
        '\u{1F53B}',
        '\u{1F4A0}',
        '\u{1F518}',
        '\u{1F533}',
        '\u{1F532}'
      ]
    ],
    [
      'flag',
      [
        '\u{1F3C1}',
        '\u{1F6A9}',
        '\u{1F38C}',
        '\u{1F3F4}',
        '\u{1F3F3}',
        '\u{1F3F3}\uFE0F\u200D\u{1F308}',
        '\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F',
        '\u{1F3F4}\u200D\u2620\uFE0F'
      ]
    ],
    [
      'country-flag',
      [
        '\u{1F1E6} \u{1F1E8}',
        '\u{1F1E6} \u{1F1E9}',
        '\u{1F1E6} \u{1F1EA}',
        '\u{1F1E6} \u{1F1EB}',
        '\u{1F1E6} \u{1F1EC}',
        '\u{1F1E6} \u{1F1EE}',
        '\u{1F1E6} \u{1F1F1}',
        '\u{1F1E6} \u{1F1F2}',
        '\u{1F1E6} \u{1F1F4}',
        '\u{1F1E6} \u{1F1F6}',
        '\u{1F1E6} \u{1F1F7}',
        '\u{1F1E6} \u{1F1F8}',
        '\u{1F1E6} \u{1F1F9}',
        '\u{1F1E6} \u{1F1FA}',
        '\u{1F1E6} \u{1F1FC}',
        '\u{1F1E6} \u{1F1FD}',
        '\u{1F1E6} \u{1F1FF}',
        '\u{1F1E7} \u{1F1E6}',
        '\u{1F1E7} \u{1F1E7}',
        '\u{1F1E7} \u{1F1E9}',
        '\u{1F1E7} \u{1F1EA}',
        '\u{1F1E7} \u{1F1EB}',
        '\u{1F1E7} \u{1F1EC}',
        '\u{1F1E7} \u{1F1ED}',
        '\u{1F1E7} \u{1F1EE}',
        '\u{1F1E7} \u{1F1EF}',
        '\u{1F1E7} \u{1F1F1}',
        '\u{1F1E7} \u{1F1F2}',
        '\u{1F1E7} \u{1F1F3}',
        '\u{1F1E7} \u{1F1F4}',
        '\u{1F1E7} \u{1F1F6}',
        '\u{1F1E7} \u{1F1F7}',
        '\u{1F1E7} \u{1F1F8}',
        '\u{1F1E7} \u{1F1F9}',
        '\u{1F1E7} \u{1F1FB}',
        '\u{1F1E7} \u{1F1FC}',
        '\u{1F1E7} \u{1F1FE}',
        '\u{1F1E7} \u{1F1FF}',
        '\u{1F1E8} \u{1F1E6}',
        '\u{1F1E8} \u{1F1E8}',
        '\u{1F1E8} \u{1F1E9}',
        '\u{1F1E8} \u{1F1EB}',
        '\u{1F1E8} \u{1F1EC}',
        '\u{1F1E8} \u{1F1ED}',
        '\u{1F1E8} \u{1F1EE}',
        '\u{1F1E8} \u{1F1F0}',
        '\u{1F1E8} \u{1F1F1}',
        '\u{1F1E8} \u{1F1F2}',
        '\u{1F1E8} \u{1F1F3}',
        '\u{1F1E8} \u{1F1F4}',
        '\u{1F1E8} \u{1F1F5}',
        '\u{1F1E8} \u{1F1F7}',
        '\u{1F1E8} \u{1F1FA}',
        '\u{1F1E8} \u{1F1FB}',
        '\u{1F1E8} \u{1F1FC}',
        '\u{1F1E8} \u{1F1FD}',
        '\u{1F1E8} \u{1F1FE}',
        '\u{1F1E8} \u{1F1FF}',
        '\u{1F1E9} \u{1F1EA}',
        '\u{1F1E9} \u{1F1EC}',
        '\u{1F1E9} \u{1F1EF}',
        '\u{1F1E9} \u{1F1F0}',
        '\u{1F1E9} \u{1F1F2}',
        '\u{1F1E9} \u{1F1F4}',
        '\u{1F1E9} \u{1F1FF}',
        '\u{1F1EA} \u{1F1E6}',
        '\u{1F1EA} \u{1F1E8}',
        '\u{1F1EA} \u{1F1EA}',
        '\u{1F1EA} \u{1F1EC}',
        '\u{1F1EA} \u{1F1ED}',
        '\u{1F1EA} \u{1F1F7}',
        '\u{1F1EA} \u{1F1F8}',
        '\u{1F1EA} \u{1F1F9}',
        '\u{1F1EA} \u{1F1FA}',
        '\u{1F1EB} \u{1F1EE}',
        '\u{1F1EB} \u{1F1EF}',
        '\u{1F1EB} \u{1F1F0}',
        '\u{1F1EB} \u{1F1F2}',
        '\u{1F1EB} \u{1F1F4}',
        '\u{1F1EB} \u{1F1F7}',
        '\u{1F1EC} \u{1F1E6}',
        '\u{1F1EC} \u{1F1E7}',
        '\u{1F1EC} \u{1F1E9}',
        '\u{1F1EC} \u{1F1EA}',
        '\u{1F1EC} \u{1F1EB}',
        '\u{1F1EC} \u{1F1EC}',
        '\u{1F1EC} \u{1F1ED}',
        '\u{1F1EC} \u{1F1EE}',
        '\u{1F1EC} \u{1F1F1}',
        '\u{1F1EC} \u{1F1F2}',
        '\u{1F1EC} \u{1F1F3}',
        '\u{1F1EC} \u{1F1F5}',
        '\u{1F1EC} \u{1F1F6}',
        '\u{1F1EC} \u{1F1F7}',
        '\u{1F1EC} \u{1F1F8}',
        '\u{1F1EC} \u{1F1F9}',
        '\u{1F1EC} \u{1F1FA}',
        '\u{1F1EC} \u{1F1FC}',
        '\u{1F1EC} \u{1F1FE}',
        '\u{1F1ED} \u{1F1F0}',
        '\u{1F1ED} \u{1F1F2}',
        '\u{1F1ED} \u{1F1F3}',
        '\u{1F1ED} \u{1F1F7}',
        '\u{1F1ED} \u{1F1F9}',
        '\u{1F1ED} \u{1F1FA}',
        '\u{1F1EE} \u{1F1E8}',
        '\u{1F1EE} \u{1F1E9}',
        '\u{1F1EE} \u{1F1EA}',
        '\u{1F1EE} \u{1F1F1}',
        '\u{1F1EE} \u{1F1F2}',
        '\u{1F1EE} \u{1F1F3}',
        '\u{1F1EE} \u{1F1F4}',
        '\u{1F1EE} \u{1F1F6}',
        '\u{1F1EE} \u{1F1F7}',
        '\u{1F1EE} \u{1F1F8}',
        '\u{1F1EE} \u{1F1F9}',
        '\u{1F1EF} \u{1F1EA}',
        '\u{1F1EF} \u{1F1F2}',
        '\u{1F1EF} \u{1F1F4}',
        '\u{1F1EF} \u{1F1F5}',
        '\u{1F1F0} \u{1F1EA}',
        '\u{1F1F0} \u{1F1EC}',
        '\u{1F1F0} \u{1F1ED}',
        '\u{1F1F0} \u{1F1EE}',
        '\u{1F1F0} \u{1F1F2}',
        '\u{1F1F0} \u{1F1F3}',
        '\u{1F1F0} \u{1F1F5}',
        '\u{1F1F0} \u{1F1F7}',
        '\u{1F1F0} \u{1F1FC}',
        '\u{1F1F0} \u{1F1FE}',
        '\u{1F1F0} \u{1F1FF}',
        '\u{1F1F1} \u{1F1E6}',
        '\u{1F1F1} \u{1F1E7}',
        '\u{1F1F1} \u{1F1E8}',
        '\u{1F1F1} \u{1F1EE}',
        '\u{1F1F1} \u{1F1F0}',
        '\u{1F1F1} \u{1F1F7}',
        '\u{1F1F1} \u{1F1F8}',
        '\u{1F1F1} \u{1F1F9}',
        '\u{1F1F1} \u{1F1FA}',
        '\u{1F1F1} \u{1F1FB}',
        '\u{1F1F1} \u{1F1FE}',
        '\u{1F1F2} \u{1F1E6}',
        '\u{1F1F2} \u{1F1E8}',
        '\u{1F1F2} \u{1F1E9}',
        '\u{1F1F2} \u{1F1EA}',
        '\u{1F1F2} \u{1F1EB}',
        '\u{1F1F2} \u{1F1EC}',
        '\u{1F1F2} \u{1F1ED}',
        '\u{1F1F2} \u{1F1F0}',
        '\u{1F1F2} \u{1F1F1}',
        '\u{1F1F2} \u{1F1F2}',
        '\u{1F1F2} \u{1F1F3}',
        '\u{1F1F2} \u{1F1F4}',
        '\u{1F1F2} \u{1F1F5}',
        '\u{1F1F2} \u{1F1F6}',
        '\u{1F1F2} \u{1F1F7}',
        '\u{1F1F2} \u{1F1F8}',
        '\u{1F1F2} \u{1F1F9}',
        '\u{1F1F2} \u{1F1FA}',
        '\u{1F1F2} \u{1F1FB}',
        '\u{1F1F2} \u{1F1FC}',
        '\u{1F1F2} \u{1F1FD}',
        '\u{1F1F2} \u{1F1FE}',
        '\u{1F1F2} \u{1F1FF}',
        '\u{1F1F3} \u{1F1E6}',
        '\u{1F1F3} \u{1F1E8}',
        '\u{1F1F3} \u{1F1EA}',
        '\u{1F1F3} \u{1F1EB}',
        '\u{1F1F3} \u{1F1EC}',
        '\u{1F1F3} \u{1F1EE}',
        '\u{1F1F3} \u{1F1F1}',
        '\u{1F1F3} \u{1F1F4}',
        '\u{1F1F3} \u{1F1F5}',
        '\u{1F1F3} \u{1F1F7}',
        '\u{1F1F3} \u{1F1FA}',
        '\u{1F1F3} \u{1F1FF}',
        '\u{1F1F4} \u{1F1F2}',
        '\u{1F1F5} \u{1F1E6}',
        '\u{1F1F5} \u{1F1EA}',
        '\u{1F1F5} \u{1F1EB}',
        '\u{1F1F5} \u{1F1EC}',
        '\u{1F1F5} \u{1F1ED}',
        '\u{1F1F5} \u{1F1F0}',
        '\u{1F1F5} \u{1F1F1}',
        '\u{1F1F5} \u{1F1F2}',
        '\u{1F1F5} \u{1F1F3}',
        '\u{1F1F5} \u{1F1F7}',
        '\u{1F1F5} \u{1F1F8}',
        '\u{1F1F5} \u{1F1F9}',
        '\u{1F1F5} \u{1F1FC}',
        '\u{1F1F5} \u{1F1FE}',
        '\u{1F1F6} \u{1F1E6}',
        '\u{1F1F7} \u{1F1EA}',
        '\u{1F1F7} \u{1F1F4}',
        '\u{1F1F7} \u{1F1F8}',
        '\u{1F1F7} \u{1F1FA}',
        '\u{1F1F7} \u{1F1FC}',
        '\u{1F1F8} \u{1F1E6}',
        '\u{1F1F8} \u{1F1E7}',
        '\u{1F1F8} \u{1F1E8}',
        '\u{1F1F8} \u{1F1E9}',
        '\u{1F1F8} \u{1F1EA}',
        '\u{1F1F8} \u{1F1EC}',
        '\u{1F1F8} \u{1F1ED}',
        '\u{1F1F8} \u{1F1EE}',
        '\u{1F1F8} \u{1F1EF}',
        '\u{1F1F8} \u{1F1F0}',
        '\u{1F1F8} \u{1F1F1}',
        '\u{1F1F8} \u{1F1F2}',
        '\u{1F1F8} \u{1F1F3}',
        '\u{1F1F8} \u{1F1F4}',
        '\u{1F1F8} \u{1F1F7}',
        '\u{1F1F8} \u{1F1F8}',
        '\u{1F1F8} \u{1F1F9}',
        '\u{1F1F8} \u{1F1FB}',
        '\u{1F1F8} \u{1F1FD}',
        '\u{1F1F8} \u{1F1FE}',
        '\u{1F1F8} \u{1F1FF}',
        '\u{1F1F9} \u{1F1E6}',
        '\u{1F1F9} \u{1F1E8}',
        '\u{1F1F9} \u{1F1E9}',
        '\u{1F1F9} \u{1F1EB}',
        '\u{1F1F9} \u{1F1EC}',
        '\u{1F1F9} \u{1F1ED}',
        '\u{1F1F9} \u{1F1EF}',
        '\u{1F1F9} \u{1F1F0}',
        '\u{1F1F9} \u{1F1F1}',
        '\u{1F1F9} \u{1F1F2}',
        '\u{1F1F9} \u{1F1F3}',
        '\u{1F1F9} \u{1F1F4}',
        '\u{1F1F9} \u{1F1F7}',
        '\u{1F1F9} \u{1F1F9}',
        '\u{1F1F9} \u{1F1FB}',
        '\u{1F1F9} \u{1F1FC}',
        '\u{1F1F9} \u{1F1FF}',
        '\u{1F1FA} \u{1F1E6}',
        '\u{1F1FA} \u{1F1EC}',
        '\u{1F1FA} \u{1F1F2}',
        '\u{1F1FA} \u{1F1F3}',
        '\u{1F1FA} \u{1F1F8}',
        '\u{1F1FA} \u{1F1FE}',
        '\u{1F1FA} \u{1F1FF}',
        '\u{1F1FB} \u{1F1E6}',
        '\u{1F1FB} \u{1F1E8}',
        '\u{1F1FB} \u{1F1EA}',
        '\u{1F1FB} \u{1F1EC}',
        '\u{1F1FB} \u{1F1EE}',
        '\u{1F1FB} \u{1F1F3}',
        '\u{1F1FB} \u{1F1FA}',
        '\u{1F1FC} \u{1F1EB}',
        '\u{1F1FC} \u{1F1F8}',
        '\u{1F1FD} \u{1F1F0}',
        '\u{1F1FE} \u{1F1EA}',
        '\u{1F1FE} \u{1F1F9}',
        '\u{1F1FF} \u{1F1E6}',
        '\u{1F1FF} \u{1F1F2}',
        '\u{1F1FF} \u{1F1FC}'
      ]
    ],
    [
      'subdivision-flag',
      [
        '\u{1F3F4} \u{E0067} \u{E0062} \u{E0065} \u{E006E} \u{E0067} \u{E007F}',
        '\u{1F3F4} \u{E0067} \u{E0062} \u{E0073} \u{E0063} \u{E0074} \u{E007F}',
        '\u{1F3F4} \u{E0067} \u{E0062} \u{E0077} \u{E006C} \u{E0073} \u{E007F}'
      ]
    ]
  ],
  bu = '_emojiList_jcnnh_1',
  yu = '_error_jcnnh_8',
  wu = '_selected_jcnnh_26',
  ku = '_selectedEmoji_jcnnh_48',
  R = { emojiList: bu, error: yu, selected: wu, selectedEmoji: ku },
  Mu = E({
    props: { modelValue: { type: String }, onUpdateModelValue: { type: Function } },
    setup: (F, a) => {
      const t = p(1),
        e = [
          [
            '\u8868\u60C5',
            [
              'face-smiling',
              'face-affection',
              'face-tongue',
              'face-hand',
              'face-neutral-skeptical',
              'face-sleepy',
              'face-unwell',
              'face-hat',
              'face-glasses',
              'face-concerned',
              'face-negative',
              'face-costume'
            ]
          ],
          [
            '\u624B\u52BF',
            [
              'hand-fingers-open',
              'hand-fingers-partial',
              'hand-single-finger',
              'hand-fingers-closed',
              'hands',
              'hand-prop',
              'body-parts'
            ]
          ],
          [
            '\u4EBA\u7269',
            [
              'person',
              'person-gesture',
              'person-role',
              'person-fantasy',
              'person-activity',
              'person-sport',
              'person-resting'
            ]
          ],
          ['\u8863\u670D', ['clothing']],
          [
            '\u52A8\u7269',
            [
              'cat-face',
              'monkey-face',
              'animal-mammal',
              'animal-bird',
              'animal-amphibian',
              'animal-reptile',
              'animal-marine',
              'animal-bug'
            ]
          ],
          ['\u690D\u7269', ['plant-flower', 'plant-other']],
          ['\u81EA\u7136', ['sky & weather', 'science']],
          [
            '\u98DF\u7269',
            ['food-fruit', 'food-vegetable', 'food-prepared', 'food-asian', 'food-marine', 'food-sweet']
          ],
          ['\u8FD0\u52A8', ['sport', 'game']]
        ],
        n = (l) => {
          t.value = l
        },
        s = (l) => {
          F.onUpdateModelValue ? F.onUpdateModelValue(l) : a.emit('update:modelValue', l)
        },
        o = I(() =>
          e[t.value][1].map((r) => {
            var c
            return (c = Bu.find((d) => d[0] === r)) == null
              ? void 0
              : c[1].map((d) => u('li', { class: d === F.modelValue ? R.selectedEmoji : '', onClick: () => s(d) }, [d]))
          })
        )
      return () =>
        u('div', { class: R.emojiList }, [
          u('nav', null, [
            e.map((l, r) => u('span', { class: r === t.value ? R.selected : '', onClick: () => n(r) }, [l[0]]))
          ]),
          u('ol', null, [o.value])
        ])
    }
  }),
  Su = '_form_16gpu_1',
  xu = '_formRow_16gpu_5',
  Zu = '_formLabel_16gpu_9',
  Vu = '_formItem_16gpu_13',
  qu = '_button_16gpu_17',
  Iu = '_input_16gpu_20',
  Lu = '_error_16gpu_30',
  Tu = '_select_16gpu_33',
  Hu = '_validationCodeInput_16gpu_38',
  Ou = '_validationCodeButton_16gpu_42',
  $u = '_formItem_value_16gpu_45',
  ju = '_formItem_errorHint_16gpu_52',
  m = {
    form: Su,
    formRow: xu,
    formLabel: Zu,
    formItem: Vu,
    button: qu,
    input: Iu,
    error: Lu,
    select: Tu,
    validationCodeInput: Hu,
    validationCodeButton: Ou,
    formItem_value: $u,
    formItem_errorHint: ju
  },
  Pu = { 'is invalid': '\u683C\u5F0F\u4E0D\u6B63\u786E' },
  zu = (F) => Pu[F] || F,
  Yu = E({
    props: { onSubmit: { type: Function } },
    setup: (F, a) => () => {
      var t, e
      return u('form', { class: m.form, onSubmit: F.onSubmit }, [
        (e = (t = a.slots).default) == null ? void 0 : e.call(t)
      ])
    }
  }),
  W = E({
    props: {
      label: { type: String },
      modelValue: { type: [String, Number, Date] },
      type: { type: String },
      error: { type: String },
      placeholder: String,
      options: Array,
      onClick: Function,
      countFrom: { type: Number, default: 60 },
      disabled: Boolean
    },
    emits: ['update:modelValue'],
    setup: (F, a) => {
      const t = p(!1),
        e = p(),
        n = p(F.countFrom),
        s = I(() => !!e.value),
        o = () =>
          (e.value = setInterval(() => {
            ;(n.value -= 1), n.value === 0 && (clearInterval(e.value), (e.value = void 0), (n.value = F.countFrom))
          }, 1e3))
      a.expose({ startCount: o })
      const l = I(() => {
        var r, c, d, g
        switch (F.type) {
          case 'text':
            return u(
              'input',
              {
                value: F.modelValue,
                placeholder: F.placeholder,
                onInput: (f) => a.emit('update:modelValue', f.target.value),
                class: [m.formItem, m.input]
              },
              null
            )
          case 'emojiSelect':
            return u(
              Mu,
              {
                modelValue: (r = F.modelValue) == null ? void 0 : r.toString(),
                onUpdateModelValue: (f) => a.emit('update:modelValue', f),
                class: [m.formItem, m.emojiList, m.error]
              },
              null
            )
          case 'validationCode':
            return u(w, null, [
              u(
                'input',
                {
                  class: [m.formItem, m.input, m.validationCodeInput],
                  value: F.modelValue,
                  onInput: (f) => a.emit('update:modelValue', f.target.value),
                  placeholder: F.placeholder
                },
                null
              ),
              u(
                T,
                {
                  disabled: s.value || F.disabled,
                  onClick: F.onClick,
                  class: [m.formItem, m.button, m.validationCodeButton]
                },
                {
                  default: () => [
                    s.value ? `${n.value}\u79D2\u540E\u53EF\u91CD\u65B0\u53D1\u9001` : '\u53D1\u9001\u9A8C\u8BC1\u7801'
                  ]
                }
              )
            ])
          case 'select':
            return u(
              'select',
              {
                class: [m.formItem, m.select],
                value: F.modelValue,
                onChange: (f) => {
                  a.emit('update:modelValue', f.target.value)
                }
              },
              [(c = F.options) == null ? void 0 : c.map((f) => u('option', { value: f.value }, [f.text]))]
            )
          case 'date':
            return u(w, null, [
              u(
                'input',
                {
                  readonly: !0,
                  value: F.modelValue,
                  placeholder: F.placeholder,
                  onClick: () => {
                    t.value = !0
                  },
                  class: [m.formItem, m.input]
                },
                null
              ),
              u(
                m1,
                { position: 'bottom', show: t.value, 'onUpdate:show': (f) => (t.value = f) },
                {
                  default: () => [
                    u(
                      f1,
                      {
                        modelValue: F.modelValue ? new Date(F.modelValue) : new Date(),
                        type: 'date',
                        title: '\u9009\u62E9\u5E74\u6708\u65E5',
                        onConfirm: (f) => {
                          a.emit('update:modelValue', new B(f).format()), (t.value = !1)
                        },
                        onCancel: () => (t.value = !1)
                      },
                      null
                    )
                  ]
                }
              )
            ])
          case void 0:
            return (g = (d = a.slots).default) == null ? void 0 : g.call(d)
        }
      })
      return () =>
        u('div', { class: m.formRow }, [
          u('label', { class: m.formLabel }, [
            F.label && u('span', { class: m.formItem_name }, [F.label]),
            u('div', { class: m.formItem_value }, [l.value]),
            u('div', { class: m.formItem_errorHint }, [u('span', null, [F.error ? zu(F.error) : '\u3000'])])
          ])
        ])
    }
  }),
  F1 = E1('me', {
    state: () => ({ me: void 0, mePromise: void 0 }),
    actions: {
      refreshMe() {
        this.mePromise = S.get('/me')
      },
      fetchMe() {
        this.refreshMe()
      }
    }
  }),
  Nu = '_mask_1n43a_1',
  Uu = '_email_1n43a_11',
  Ru = '_overlay_1n43a_17',
  Wu = '_currentUser_1n43a_28',
  Ku = '_action_1n43a_34',
  Xu = '_action_list_1n43a_41',
  Qu = '_icon_1n43a_45',
  h = { mask: Nu, email: Uu, overlay: Ru, currentUser: Wu, action: Ku, action_list: Xu, icon: Qu },
  Gu = E({
    props: { onClose: { type: Function } },
    setup: (F, a) => {
      const t = F1(),
        e = () => {
          var l
          ;(l = F.onClose) == null || l.call(F)
        },
        n = d1(),
        s = p()
      u1(async () => {
        const l = await t.mePromise
        s.value = l == null ? void 0 : l.data.resource
      })
      const o = async () => {
        await Q.confirm({
          title: '\u786E\u8BA4',
          message: '\u4F60\u771F\u7684\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F'
        }),
          localStorage.removeItem('jwt'),
          window.location.reload()
      }
      return () =>
        u(w, null, [
          u('div', { class: h.mask, onClick: e }, null),
          u('div', { class: h.overlay }, [
            u('section', { class: h.currentUser }, [
              s.value
                ? u('div', null, [
                    u('h2', { class: h.email }, [s.value.email]),
                    u('p', { onClick: o }, [i('\u70B9\u51FB\u8FD9\u91CC\u9000\u51FA\u767B\u5F55')])
                  ])
                : u(
                    A,
                    { to: `/sign_in?return_to=${n.fullPath}` },
                    {
                      default: () => [
                        u('h2', null, [i('\u672A\u767B\u5F55\u7528\u6237')]),
                        u('p', null, [i('\u70B9\u51FB\u8FD9\u91CC\u767B\u5F55')])
                      ]
                    }
                  )
            ]),
            u('nav', null, [
              u('ul', { class: h.action_list }, [
                u('li', { onClick: e }, [
                  u(
                    A,
                    { to: '/items', class: h.action },
                    {
                      default: () => [u(b, { name: 'sun', class: h.icon }, null), u('span', null, [i('\u8BB0\u8D26')])]
                    }
                  )
                ]),
                u('li', { onClick: e }, [
                  u(
                    A,
                    { to: '/statistics', class: h.action },
                    {
                      default: () => [
                        u(b, { name: 'charts', class: h.icon }, null),
                        u('span', null, [i('\u7EDF\u8BA1\u56FE\u8868')])
                      ]
                    }
                  )
                ]),
                u('li', { onClick: e }, [
                  u(
                    A,
                    { to: '/export', class: h.action },
                    {
                      default: () => [
                        u(b, { name: 'export', class: h.icon }, null),
                        u('span', null, [i('\u5BFC\u51FA\u6570\u636E')])
                      ]
                    }
                  )
                ]),
                u('li', { onClick: e }, [
                  u(
                    A,
                    { to: '/notify', class: h.action },
                    {
                      default: () => [
                        u(b, { name: 'notify', class: h.icon }, null),
                        u('span', null, [i('\u8BB0\u8D26\u63D0\u9192')])
                      ]
                    }
                  )
                ])
              ])
            ])
          ])
        ])
    }
  }),
  Ju = E({
    setup: (F, a) => {
      const t = p(!1),
        e = () => {
          t.value = !t.value
        }
      return () =>
        u(w, null, [
          u(b, { name: 'menu', class: h.icon, onClick: e }, null),
          t.value && u(Gu, { onClose: () => (t.value = !1) }, null)
        ])
    }
  }),
  u0 = '_overlay_1amul_1',
  F0 = '_overlay_inner_1amul_8',
  t0 = '_actions_1amul_17',
  K = { overlay: u0, overlay_inner: F0, actions: t0 }
E({ props: { startDate: { type: String, required: !1 }, endDate: { type: String, required: !1 } } })
const e0 = E({
    props: {
      component: { type: Object, required: !0 },
      rerenderOnSwitchTab: { type: Boolean, default: !1 },
      hideThisYear: { type: Boolean, default: !1 }
    },
    setup: (F, a) => {
      const t = p('\u672C\u6708'),
        e = new B(),
        n = L({ start: new B().format(), end: new B().format() }),
        s = L({}),
        o = [
          { start: e.firstDayOfMonth(), end: e.lastDayOfMonth() },
          { start: e.add(-1, 'month').firstDayOfMonth(), end: e.add(-1, 'month').lastDayOfMonth() },
          { start: e.firstDayOfYear(), end: e.lastDayOfYear() }
        ],
        l = p(!1),
        r = (d) => {
          d.preventDefault(), (l.value = !1), Object.assign(s, n)
        },
        c = (d) => {
          d === '\u81EA\u5B9A\u4E49\u65F6\u95F4' && (l.value = !0)
        }
      return () =>
        u(D1, null, {
          title: () => '\u751F\u6D3B\u8BB0\u8D26',
          icon: () => u(Ju, null, null),
          default: () =>
            u(w, null, [
              F.hideThisYear
                ? u(
                    G,
                    {
                      classPrefix: 'customTabs',
                      selected: t.value,
                      'onUpdate:selected': [(d) => (t.value = d), c],
                      rerenderOnSelect: F.rerenderOnSwitchTab
                    },
                    {
                      default: () => [
                        u(
                          y,
                          { value: '\u672C\u6708', name: '\u672C\u6708' },
                          {
                            default: () => [
                              u(F.component, { startDate: o[0].start.format(), endDate: o[0].end.format() }, null)
                            ]
                          }
                        ),
                        u(
                          y,
                          { value: '\u4E0A\u6708', name: '\u4E0A\u6708' },
                          {
                            default: () => [
                              u(F.component, { startDate: o[1].start.format(), endDate: o[1].end.format() }, null)
                            ]
                          }
                        ),
                        u(
                          y,
                          { value: '\u81EA\u5B9A\u4E49\u65F6\u95F4', name: '\u81EA\u5B9A\u4E49\u65F6\u95F4' },
                          { default: () => [u(F.component, { startDate: s.start, endDate: s.end }, null)] }
                        )
                      ]
                    }
                  )
                : u(
                    G,
                    {
                      classPrefix: 'customTabs',
                      selected: t.value,
                      'onUpdate:selected': [(d) => (t.value = d), c],
                      rerenderOnSelect: F.rerenderOnSwitchTab
                    },
                    {
                      default: () => [
                        u(
                          y,
                          { value: '\u672C\u6708', name: '\u672C\u6708' },
                          {
                            default: () => [
                              u(F.component, { startDate: o[0].start.format(), endDate: o[0].end.format() }, null)
                            ]
                          }
                        ),
                        u(
                          y,
                          { value: '\u4E0A\u6708', name: '\u4E0A\u6708' },
                          {
                            default: () => [
                              u(F.component, { startDate: o[1].start.format(), endDate: o[1].end.format() }, null)
                            ]
                          }
                        ),
                        u(
                          y,
                          { value: '\u4ECA\u5E74', name: '\u4ECA\u5E74' },
                          {
                            default: () => [
                              u(F.component, { startDate: o[2].start.format(), endDate: o[2].end.format() }, null)
                            ]
                          }
                        ),
                        u(
                          y,
                          { value: '\u81EA\u5B9A\u4E49\u65F6\u95F4', name: '\u81EA\u5B9A\u4E49\u65F6\u95F4' },
                          { default: () => [u(F.component, { startDate: s.start, endDate: s.end }, null)] }
                        )
                      ]
                    }
                  ),
              u(
                O1,
                { show: l.value, class: K.overlay },
                {
                  default: () => [
                    u('div', { class: K.overlay_inner }, [
                      u('header', null, [i('\u8BF7\u9009\u62E9\u65F6\u95F4')]),
                      u('main', null, [
                        u(
                          Yu,
                          { onSubmit: r },
                          {
                            default: () => [
                              u(
                                W,
                                {
                                  label: '\u5F00\u59CB\u65F6\u95F4',
                                  modelValue: n.start,
                                  'onUpdate:modelValue': (d) => (n.start = d),
                                  type: 'date'
                                },
                                null
                              ),
                              u(
                                W,
                                {
                                  label: '\u7ED3\u675F\u65F6\u95F4',
                                  modelValue: n.end,
                                  'onUpdate:modelValue': (d) => (n.end = d),
                                  type: 'date'
                                },
                                null
                              ),
                              u(W, null, {
                                default: () => [
                                  u('div', { class: K.actions }, [
                                    u('button', { type: 'button', onClick: () => (l.value = !1) }, [i('\u53D6\u6D88')]),
                                    u('button', { type: 'submit' }, [i('\u786E\u8BA4')])
                                  ])
                                ]
                              })
                            ]
                          }
                        )
                      ])
                    ])
                  ]
                }
              )
            ])
        })
    }
  }),
  r1 = (F) => {
    const a = F1()
    u1(() => {
      a.mePromise.then(F, () => {})
    })
  },
  a0 = '_center_9s5tk_1',
  n0 = '_horizontal_9s5tk_6',
  s0 = '_vertical_9s5tk_9',
  q = { center: a0, horizontal: n0, vertical: s0 },
  l0 = { '-': q.horizontal, '|': q.vertical, horizontal: q.horizontal, vertical: q.vertical },
  p1 = E({
    props: { direction: { type: String, default: 'horizontal' } },
    setup: (F, a) => {
      const t = l0[F.direction]
      return () => {
        var e, n
        return u('div', { class: [q.center, t] }, [(n = (e = a.slots).default) == null ? void 0 : n.call(e)])
      }
    }
  }),
  o0 = E({
    props: { value: { type: [Date, String], required: !0 }, format: { type: String, default: 'YYYY-MM-DD HH:mm:ss' } },
    setup: (F, a) => {
      const t = I(() => new B(F.value).format(F.format))
      return () => u('div', null, [t.value])
    }
  }),
  r0 = '_floatButton_mjswc_1',
  i0 = '_icon_mjswc_13',
  i1 = { floatButton: r0, icon: i0 },
  c0 = E({
    props: { iconName: { type: String, required: !0 } },
    setup: (F, a) => () => u('div', { class: i1.floatButton }, [u(b, { name: F.iconName, class: i1.icon }, null)])
  }),
  $ = E({
    props: { value: { type: Number, required: !0 } },
    setup: (F, a) => () => u('span', null, [_1(F.value / 100)])
  }),
  _1 = (F) => {
    const a = F.toString(),
      t = a.indexOf('.')
    return t < 0 ? a + '.00' : a.substring(t).length === 2 ? a + '0' : a
  },
  Y0 = (F) => _1(F / 100),
  d0 = (F) =>
    E1(typeof F == 'string' ? F : F.join('-'), {
      state: () => ({ items: [], hasMore: !1, page: 0 }),
      actions: {
        async _fetch(a, t, e) {
          if (!t || !e) return
          const n = await S.get(
              '/items',
              { happen_after: t, happen_before: e, page: a ? 1 : this.page + 1 },
              { _mock: 'itemIndex', _autoLoading: !0 }
            ),
            { resources: s, pager: o } = n.data
          a ? (this.items = s) : this.items.push(...s),
            (this.hasMore = (o.page - 1) * o.per_page + s.length < o.count),
            (this.page += 1)
        },
        async fetchNextPage(a, t) {
          this._fetch(!1, a, t)
        },
        async fetchItems(a, t) {
          this._fetch(!0, a, t)
        }
      }
    })(),
  E0 = '_total_rsvgc_1',
  m0 = '_list_rsvgc_23',
  f0 = '_sign_rsvgc_30',
  D0 = '_text_rsvgc_42',
  p0 = '_tagAndAmount_rsvgc_48',
  _0 = '_tag_rsvgc_48',
  h0 = '_amount_rsvgc_55',
  A0 = '_time_rsvgc_58',
  C0 = '_more_rsvgc_63',
  g0 = '_button_rsvgc_68',
  v0 = '_button_wrapper_rsvgc_71',
  B0 = '_pig_rsvgc_75',
  b0 = '_pig_wrapper_rsvgc_79',
  _ = {
    total: E0,
    list: m0,
    sign: f0,
    text: D0,
    tagAndAmount: p0,
    tag: _0,
    amount: h0,
    time: A0,
    more: C0,
    button: g0,
    button_wrapper: v0,
    pig: B0,
    pig_wrapper: b0
  },
  y0 = E({
    props: { startDate: { type: String, required: !1 }, endDate: { type: String, required: !1 } },
    setup: (F, a) => {
      const t = d0(['items', F.startDate, F.endDate])
      r1(() => t.fetchItems(F.startDate, F.endDate)),
        a1(
          () => [F.startDate, F.endDate],
          () => {
            t.$reset(), t.fetchItems(F.startDate, F.endDate)
          }
        )
      const e = L({ expenses: 0, income: 0, balance: 0 }),
        n = async () => {
          if (!F.startDate || !F.endDate) return
          const s = await S.get(
            '/items/balance',
            { happen_after: F.startDate, happen_before: F.endDate },
            { _mock: 'itemIndexBalance' }
          )
          Object.assign(e, s.data)
        }
      return (
        r1(n),
        a1(
          () => [F.startDate, F.endDate],
          () => {
            Object.assign(e, { expenses: 0, income: 0, balance: 0 }), n()
          }
        ),
        () =>
          !F.startDate || !F.endDate
            ? u('div', null, [i('\u8BF7\u5148\u9009\u62E9\u65F6\u95F4\u8303\u56F4')])
            : u('div', { class: _.wrapper }, [
                t.items && t.items.length > 0
                  ? u(w, null, [
                      u('ul', { class: _.total }, [
                        u('li', null, [u('span', null, [i('\u6536\u5165')]), u($, { value: e.income }, null)]),
                        u('li', null, [u('span', null, [i('\u652F\u51FA')]), u($, { value: e.expenses }, null)]),
                        u('li', null, [u('span', null, [i('\u51C0\u6536\u5165')]), u($, { value: e.balance }, null)])
                      ]),
                      u('ol', { class: _.list }, [
                        t.items.map((s) =>
                          u('li', null, [
                            u('div', { class: _.sign }, [
                              u('span', null, [s.tags && s.tags.length > 0 ? s.tags[0].sign : '\u{1F4B0}'])
                            ]),
                            u('div', { class: _.text }, [
                              u('div', { class: _.tagAndAmount }, [
                                u('span', { class: _.tag }, [
                                  s.tags && s.tags.length > 0 ? s.tags[0].name : '\u672A\u5206\u7C7B'
                                ]),
                                u('span', { class: _.amount }, [i('\uFFE5'), u($, { value: s.amount }, null)])
                              ]),
                              u('div', { class: _.time }, [u(o0, { value: s.happen_at }, null)])
                            ])
                          ])
                        )
                      ]),
                      u('div', { class: _.more }, [
                        t.hasMore
                          ? u(
                              T,
                              { onClick: () => t.fetchNextPage(F.startDate, F.endDate) },
                              { default: () => [i('\u52A0\u8F7D\u66F4\u591A')] }
                            )
                          : u('span', null, [i('\u6CA1\u6709\u66F4\u591A')])
                      ])
                    ])
                  : u(w, null, [
                      u(
                        p1,
                        { class: _.pig_wrapper, direction: '|' },
                        {
                          default: () => [
                            u(b, { name: 'sun', class: _.pig }, null),
                            u('p', null, [i('\u76EE\u524D\u6CA1\u6709\u6570\u636E')])
                          ]
                        }
                      ),
                      u('div', { class: _.button_wrapper }, [
                        u(
                          A,
                          { to: '/items/create' },
                          {
                            default: () => [
                              u(T, { class: _.button }, { default: () => [i('\u5F00\u59CB\u8BB0\u8D26')] })
                            ]
                          }
                        )
                      ])
                    ]),
                u(A, { to: '/items/create' }, { default: () => [u(c0, { iconName: 'add' }, null)] })
              ])
      )
    }
  }),
  w0 = E({ setup: (F, a) => () => u(e0, { component: y0 }, null) }),
  k0 = '_card_b6osa_1',
  M0 = '_actions_b6osa_17',
  S0 = '_fake_b6osa_33',
  C = { card: k0, actions: M0, fake: S0 },
  h1 = () =>
    u('div', { class: C.card }, [
      u('svg', null, [u('use', { 'xlink:href': '#sun' }, null)]),
      u('h2', null, [i('\u4F1A\u6323\u94B1'), u('br', null, null), i('\u8FD8\u4F1A\u7701\u94B1')])
    ])
h1.displayName = 'First'
const M = E({
    setup: (F, a) => {
      const t = () => {
        localStorage.setItem('skipFeatures', 'yes')
      }
      return () => u('span', { onClick: t }, [u(A, { to: '/items' }, { default: () => [i('\u8DF3\u8FC7')] })])
    }
  }),
  A1 = () =>
    u('div', { class: C.actions }, [
      u(M, { class: C.fake }, null),
      u(A, { to: '/welcome/2' }, { default: () => [i('\u4E0B\u4E00\u9875')] }),
      u(M, null, null)
    ])
A1.displayName = 'FirstActions'
const C1 = () =>
  u('div', { class: C.card }, [
    u('svg', null, [u('use', { 'xlink:href': '#cloud' }, null)]),
    u('h2', null, [
      i('\u6BCF\u65E5\u63D0\u9192'),
      u('br', null, null),
      i('\u4E0D\u9057\u6F0F\u6BCF\u4E00\u7B14\u8D26\u5355')
    ])
  ])
C1.displayName = 'Forth'
const x0 = () => {
    localStorage.setItem('skipFeatures', 'yes')
  },
  g1 = () =>
    u('div', { class: C.actions }, [
      u(M, { class: C.fake }, null),
      u('span', { onClick: x0 }, [u(A, { to: '/items' }, { default: () => [i('\u5B8C\u6210')] })]),
      u(M, { class: C.fake }, null)
    ])
g1.displayName = 'ForthActions'
const v1 = () =>
  u('div', { class: C.card }, [
    u('svg', null, [u('use', { 'xlink:href': '#clock' }, null)]),
    u('h2', null, [
      i('\u6BCF\u65E5\u63D0\u9192'),
      u('br', null, null),
      i('\u4E0D\u9057\u6F0F\u6BCF\u4E00\u7B14\u8D26\u5355')
    ])
  ])
v1.displayName = 'Second'
const B1 = () =>
  u('div', { class: C.actions }, [
    u(M, { class: C.fake }, null),
    u(A, { to: '/welcome/3' }, { default: () => [i('\u4E0B\u4E00\u9875')] }),
    u(M, null, null)
  ])
B1.displayName = 'FirstActions'
const b1 = () =>
  u('div', { class: C.card }, [
    u('svg', null, [u('use', { 'xlink:href': '#chart' }, null)]),
    u('h2', null, [
      i('\u6BCF\u65E5\u63D0\u9192'),
      u('br', null, null),
      i('\u4E0D\u9057\u6F0F\u6BCF\u4E00\u7B14\u8D26\u5355')
    ])
  ])
b1.displayName = 'Third'
const y1 = () =>
  u('div', { class: C.actions }, [
    u(M, { class: C.fake }, null),
    u(A, { to: '/welcome/4' }, { default: () => [i('\u4E0B\u4E00\u9875')] }),
    u(M, null, null)
  ])
y1.displayName = 'ThirdActions'
const Z0 = '_text_122p6_1',
  V0 = '_link_122p6_6',
  q0 = '_pig_122p6_10',
  I0 = '_pig_wrapper_122p6_14',
  j = { text: Z0, link: V0, pig: q0, pig_wrapper: I0 },
  J = E({
    props: { name: { type: String } },
    setup: (F, a) => {
      const t = z(),
        e = () => {
          t.back()
        }
      return () =>
        u('div', null, [
          u(p1, { class: j.pig_wrapper }, { default: () => [u(b, { name: 'sun', class: j.pig }, null)] }),
          u('p', { class: j.text }, [i('\u656C\u8BF7\u671F\u5F85')]),
          u('p', { class: j.link }, [u(T, { onClick: e }, { default: () => [i('\u8FD4\u56DE')] })])
        ])
    }
  }),
  L0 = Object.freeze(
    Object.defineProperty({ __proto__: null, ComingSoon: J, default: J }, Symbol.toStringTag, { value: 'Module' })
  ),
  T0 = [
    { path: '/', redirect: '/welcome' },
    {
      path: '/welcome',
      component: () =>
        k(
          () => import('./Welcome.790d787e.js'),
          ['assets/Welcome.790d787e.js', 'assets/Welcome.ebdce2a8.css', 'assets/vendor.cc682980.js']
        ),
      beforeEnter: (F, a, t) => {
        localStorage.getItem('skipFeatures') === 'yes' ? t('/items') : t()
      },
      children: [
        { path: '', redirect: '/welcome/1' },
        { path: '1', name: 'Welcome1', components: { main: h1, footer: A1 } },
        { path: '2', name: 'Welcome2', components: { main: v1, footer: B1 } },
        { path: '3', name: 'Welcome3', components: { main: b1, footer: y1 } },
        { path: '4', name: 'Welcome4', components: { main: C1, footer: g1 } }
      ]
    },
    {
      path: '/items',
      component: () =>
        k(() => import('./ItemPage.2fc5b2df.js'), ['assets/ItemPage.2fc5b2df.js', 'assets/vendor.cc682980.js']),
      children: [
        { path: '', component: w0 },
        { path: 'create', component: vu }
      ]
    },
    {
      path: '/tags',
      component: () =>
        k(() => import('./TagPage.701ad498.js'), ['assets/TagPage.701ad498.js', 'assets/vendor.cc682980.js']),
      children: [
        {
          path: 'create',
          component: () =>
            k(
              () => import('./TagCreate.094588d9.js'),
              [
                'assets/TagCreate.094588d9.js',
                'assets/TagForm.5e35e85e.js',
                'assets/TagForm.c0978d16.css',
                'assets/vendor.cc682980.js',
                'assets/vant.89ecb901.js',
                'assets/vant.a3570278.css'
              ]
            )
        },
        {
          path: ':id/edit',
          component: () =>
            k(
              () => import('./TagEdit.164b098c.js'),
              [
                'assets/TagEdit.164b098c.js',
                'assets/vendor.cc682980.js',
                'assets/TagForm.5e35e85e.js',
                'assets/TagForm.c0978d16.css',
                'assets/vant.89ecb901.js',
                'assets/vant.a3570278.css'
              ]
            )
        }
      ]
    },
    {
      path: '/sign_in',
      component: () =>
        k(
          () => import('./SignInPage.0c7b3cb2.js'),
          [
            'assets/SignInPage.0c7b3cb2.js',
            'assets/SignInPage.ddb17bfa.css',
            'assets/vendor.cc682980.js',
            'assets/vant.89ecb901.js',
            'assets/vant.a3570278.css'
          ]
        )
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () =>
        k(
          () => import('./StatisticsPage.85f9b609.js'),
          [
            'assets/StatisticsPage.85f9b609.js',
            'assets/StatisticsPage.2aab497a.css',
            'assets/echarts.0ca48ff0.js',
            'assets/vendor.cc682980.js',
            'assets/vant.89ecb901.js',
            'assets/vant.a3570278.css'
          ]
        )
    },
    { path: '/export', component: () => k(() => Promise.resolve().then(() => L0), void 0) },
    { path: '/notify', component: J }
  ]
const H0 = E({
    setup() {
      return () => u('div', { class: 'page' }, [u(Z1, null, { default: ({ Component: F }) => u(V1, null, [F]) })])
    }
  }),
  O0 = q1(),
  P = document.createElement('div')
P.innerHTML =
  '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">@font-face { font-family: feedback-iconfont; src: url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944&quot;) format(&quot;woff2&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944&quot;) format(&quot;woff&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944&quot;) format(&quot;truetype&quot;); }</style><style type="text/css">@font-face { font-family: feedback-iconfont; src: url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944&quot;) format(&quot;woff2&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944&quot;) format(&quot;woff&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944&quot;) format(&quot;truetype&quot;); }</style><style type="text/css">@font-face { font-family: feedback-iconfont; src: url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944&quot;) format(&quot;woff2&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944&quot;) format(&quot;woff&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944&quot;) format(&quot;truetype&quot;); }</style><style type="text/css">@font-face { font-family: feedback-iconfont; src: url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944&quot;) format(&quot;woff2&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944&quot;) format(&quot;woff&quot;), url(&quot;//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944&quot;) format(&quot;truetype&quot;); }</style></defs><symbol id="add" viewBox="0 0 1024 1024"><path d="M900.7 432.2H548.4V109.3c0-20.2-16.5-36.7-36.7-36.7-20.2 0-36.7 16.5-36.7 36.7v322.9H122.8c-20.2 0-36.7 16.5-36.7 36.7 0 20.2 16.5 36.7 36.7 36.7h352.3v381.6c0 20.2 16.5 36.7 36.7 36.7 20.2 0 36.7-16.5 36.7-36.7V505.6h352.3c20.2 0 36.7-16.5 36.7-36.7-0.1-20.2-16.6-36.7-36.8-36.7z" p-id="1930"/></symbol><symbol id="chart" viewBox="0 0 129.738 108.268"><g id="\u56FE\u8868" transform="translate(-50.115 -125.809)"><path id="\u8DEF\u5F84_33" d="M109.532,400.289h16.557V421H109.532Zm33.115-33.115H159.2V421H142.647Zm29.029,16.557h16.557V421H171.676Zm37.2-37.272h16.557v70.387H208.876Z" transform="translate(-51.099 -189.761)" fill="#cae4ff"/><path id="\u8DEF\u5F84_34" d="M116.148,196.59a8.745,8.745,0,0,0,8.028-12.042l20.715-20.715a8.715,8.715,0,0,0,3.3.645,8.514,8.514,0,0,0,5.591-2.15l17.919,8.96c0,.215-.143.358-.143.573a8.709,8.709,0,1,0,17.417.072,9.079,9.079,0,0,0-.645-3.369l20.858-26.09a8.714,8.714,0,0,0,11.325-4.8,8.624,8.624,0,0,0-1.935-9.39,8.919,8.919,0,0,0-12.328,0,8.7,8.7,0,0,0-1.864,9.533l-20.858,26.09a8.818,8.818,0,0,0-8.745,1.505l-17.991-8.96c0-.215.143-.358.143-.573a8.673,8.673,0,0,0-14.837-6.164,8.743,8.743,0,0,0-1.864,9.461l-20.786,20.786a9.048,9.048,0,0,0-9.461,1.864,8.717,8.717,0,0,0-.072,12.328,8.893,8.893,0,0,0,6.236,2.437Zm94.9-63.577a1.95,1.95,0,0,1,2.8.143,1.994,1.994,0,0,1,0,2.724,2.086,2.086,0,0,1-2.8,0A2.033,2.033,0,0,1,211.048,133.013Zm-32.111,37.415a1.977,1.977,0,0,1,2.8,2.8,2.086,2.086,0,0,1-2.8,0A1.947,1.947,0,0,1,178.937,170.428Zm-32.111-16.056a1.977,1.977,0,0,1,2.8,2.8,2.086,2.086,0,0,1-2.8,0A2.26,2.26,0,0,1,146.826,154.372Zm-32.04,32.111a1.977,1.977,0,0,1,2.8,2.8,2.086,2.086,0,0,1-2.8,0A2.484,2.484,0,0,1,114.786,186.484Z" transform="translate(-49.261)" fill="#0972e7"/><path id="\u8DEF\u5F84_35" d="M176.553,390.919h-2.007V319.386a3.365,3.365,0,0,0-3.369-3.369H155.122a3.365,3.365,0,0,0-3.369,3.369v71.534h-9.318V356.8a3.365,3.365,0,0,0-3.369-3.369H123.01a3.365,3.365,0,0,0-3.369,3.369v34.118H110.4v-50.1a3.365,3.365,0,0,0-3.369-3.369H90.971a3.365,3.365,0,0,0-3.369,3.369v50.1H78.284V372.857a3.365,3.365,0,0,0-3.369-3.369H58.86a3.365,3.365,0,0,0-3.369,3.369v18.063H53.484a3.369,3.369,0,0,0,0,6.738h123a3.365,3.365,0,0,0,3.369-3.369,3.261,3.261,0,0,0-3.3-3.369Zm-114.325,0V376.226h9.318v14.694Zm32.111,0v-46.8h9.318v46.8Zm32.111,0V360.17h9.318v30.749Zm32.111,0V322.755h9.318v68.165Z" transform="translate(0 -163.58)" fill="#0972e7"/></g></symbol><symbol id="charts" viewBox="0 0 32 26.704"><g id="\u56FE\u8868" transform="translate(-50.115 -125.809)"><path id="\u8DEF\u5F84_33" d="M109.532,359.737h4.084v5.109h-4.084Zm8.168-8.168h4.084v13.277H117.7Zm7.16,4.084h4.084v9.193H124.86Zm9.176-9.193h4.084v17.361h-4.084Z" transform="translate(-57.365 -213.032)" fill="#cae4ff"/><path id="\u8DEF\u5F84_34" d="M109.554,143.267a2.157,2.157,0,0,0,1.98-2.97l5.109-5.109a2.15,2.15,0,0,0,.813.159,2.1,2.1,0,0,0,1.379-.53l4.42,2.21c0,.053-.035.088-.035.141a2.148,2.148,0,1,0,4.3.018,2.239,2.239,0,0,0-.159-.831l5.145-6.435a2.149,2.149,0,0,0,2.793-1.185,2.127,2.127,0,0,0-.477-2.316,2.2,2.2,0,0,0-3.041,0,2.147,2.147,0,0,0-.46,2.351l-5.145,6.435a2.175,2.175,0,0,0-2.157.371l-4.437-2.21c0-.053.035-.088.035-.141a2.139,2.139,0,0,0-3.66-1.52,2.157,2.157,0,0,0-.46,2.334l-5.127,5.127a2.232,2.232,0,0,0-2.334.46,2.15,2.15,0,0,0-.018,3.041,2.194,2.194,0,0,0,1.538.6Zm23.407-15.681a.481.481,0,0,1,.689.035.492.492,0,0,1,0,.672.514.514,0,0,1-.689,0A.5.5,0,0,1,132.961,127.586Zm-7.92,9.229a.488.488,0,0,1,.689.689.514.514,0,0,1-.689,0A.48.48,0,0,1,125.041,136.814Zm-7.92-3.96a.488.488,0,1,1,.689.689.514.514,0,0,1-.689,0A.557.557,0,0,1,117.12,132.854Zm-7.9,7.92a.488.488,0,0,1,.689.689.514.514,0,0,1-.689,0A.613.613,0,0,1,109.218,140.775Z" transform="translate(-55.302)" fill="#0972e7"/><path id="\u8DEF\u5F84_35" d="M81.3,334.492h-.5V316.848a.83.83,0,0,0-.831-.831h-3.96a.83.83,0,0,0-.831.831v17.644h-2.3v-8.415a.83.83,0,0,0-.831-.831h-3.96a.83.83,0,0,0-.831.831v8.415H64.983V322.134a.83.83,0,0,0-.831-.831h-3.96a.83.83,0,0,0-.831.831v12.358h-2.3v-4.455a.83.83,0,0,0-.831-.831h-3.96a.83.83,0,0,0-.831.831v4.455h-.5a.831.831,0,1,0,0,1.662H81.283a.83.83,0,0,0,.831-.831.8.8,0,0,0-.813-.831Zm-28.2,0v-3.624h2.3v3.624Zm7.92,0V322.947h2.3v11.545Zm7.92,0v-7.584h2.3v7.584Zm7.92,0V317.679h2.3v16.813Z" transform="translate(0 -183.64)" fill="#0972e7"/></g></symbol><symbol id="clock" viewBox="0 0 128.537 150.53"><g id="\u95F9\u949F" transform="translate(-74.868 0)"><path id="\u8DEF\u5F84_36" d="M167.9,86.932m-59.33,0A59.33,59.33,0,1,0,167.9,27.6,59.33,59.33,0,0,0,108.565,86.932Z" transform="translate(-28.741 -23.542)" fill="#ffbab0"/><path id="\u8DEF\u5F84_37" d="M152.183,133.273a62.036,62.036,0,1,1,62.053-62.042A62.036,62.036,0,0,1,152.183,133.273Zm0-118.66a56.641,56.641,0,1,0,56.658,56.624,56.641,56.641,0,0,0-56.658-56.624Z" transform="translate(-13.046 -7.848)" fill="#783741"/><path id="\u8DEF\u5F84_38" d="M181.245,61.212A18.807,18.807,0,0,0,145.136,68.6c0,5.192,4.533,12.685,7.932,16.084C161.1,75.25,169.22,65.22,181.245,61.212Z" transform="translate(-59.934 -42.456)" fill="#fff"/><path id="\u8DEF\u5F84_39" d="M129.624,65.354a3.991,3.991,0,0,1-2.858-1.184c-3.788-3.788-9.116-12.16-9.116-18.942a22.849,22.849,0,0,1,43.855-9,4.042,4.042,0,0,1-2.419,5.429c-10.418,3.484-17.978,12.4-25.369,20.989l-1.082,1.285a4.059,4.059,0,0,1-2.926,1.421ZM140.5,30.463a14.782,14.782,0,0,0-14.748,14.765c0,2.571,1.793,6.545,3.941,9.742,6.393-7.442,13.141-14.765,22.223-19.111a14.748,14.748,0,0,0-11.416-5.4Z" transform="translate(-36.49 -19.081)" fill="#783741"/><path id="\u8DEF\u5F84_40" d="M633.329,61.442a18.807,18.807,0,0,1,36.092,7.391,26,26,0,0,1-6.765,15.661c-8.017-9.437-17.3-19.044-29.327-23.052Z" transform="translate(-476.332 -42.685)" fill="#fff"/><path id="\u8DEF\u5F84_41" d="M639.209,65.082h-.169a4.042,4.042,0,0,1-2.909-1.421C628.3,54.494,619.556,45.5,608.563,41.81a4.042,4.042,0,0,1-2.436-5.429,22.866,22.866,0,0,1,43.872,9c0,6.63-4.042,14.613-7.932,18.6a4.042,4.042,0,0,1-2.858,1.1ZM615.751,35.975c9.082,4.211,16.541,11.179,23.2,18.6a20.682,20.682,0,0,0,2.943-9.217,14.765,14.765,0,0,0-26.147-9.387Z" transform="translate(-452.851 -19.231)" fill="#783741"/><path id="\u8DEF\u5F84_42" d="M277.638,765.562l-22.41,22.409-.034-35.956,22.443,13.547Z" transform="translate(-153.807 -641.422)" fill="#ffbab0"/><path id="\u8DEF\u5F84_43" d="M231.981,768.531a4.042,4.042,0,0,1-4.042-4.042V728.532a4.042,4.042,0,0,1,6.139-3.383l22.443,13.53a4.093,4.093,0,0,1,1.911,2.977,4.042,4.042,0,0,1-1.15,3.383l-22.443,22.376a4.026,4.026,0,0,1-2.858,1.116Zm4.025-32.828V754.8l11.839-11.839Z" transform="translate(-130.56 -618.007)" fill="#783741"/><path id="\u8DEF\u5F84_44" d="M625.394,765.562l22.393,22.409.034-35.956-22.426,13.547Z" transform="translate(-469.564 -641.422)" fill="#ffbab0"/><path id="\u8DEF\u5F84_45" d="M624.3,768.515a4.025,4.025,0,0,1-2.858-1.184L599.05,744.989a4.042,4.042,0,0,1,.761-6.325l22.443-13.53a4.025,4.025,0,0,1,6.122,3.383V764.54a4.059,4.059,0,0,1-2.571,3.738,4.18,4.18,0,0,1-1.505.237ZM608.42,742.926l11.839,11.839v-19.01Z" transform="translate(-446.079 -617.991)" fill="#783741"/><path id="\u8DEF\u5F84_46" d="M167.9,160.3m-59.33,0a59.33,59.33,0,1,0,59.33-59.33,59.33,59.33,0,0,0-59.33,59.33Z" transform="translate(-28.741 -86.125)" fill="#ffbab0"/><path id="\u8DEF\u5F84_47" d="M152.183,206.646A62.036,62.036,0,1,1,214.236,144.6,62.036,62.036,0,0,1,152.183,206.646Zm0-118.677a56.641,56.641,0,1,0,56.658,56.647,56.641,56.641,0,0,0-56.658-56.647Z" transform="translate(-13.046 -70.43)" fill="#783741"/><path id="\u8DEF\u5F84_48" d="M178.222,150.524a3.991,3.991,0,0,1-2.791-1.133l-14.9-14.308a65.249,65.249,0,0,1-20.938,3.078,68.378,68.378,0,0,1-20.3-2.469l-15.222,13.784a4.042,4.042,0,0,1-6.765-2.994V123.616A68.565,68.565,0,0,1,74.868,74.18V63.389A62.256,62.256,0,0,1,83,33.978a20.549,20.549,0,0,1-1.844-7.831A22.866,22.866,0,0,1,113.548,5.379a63.643,63.643,0,0,1,51.212,0,22.866,22.866,0,0,1,32.388,20.769,24.22,24.22,0,0,1-1.691,8.186,62.307,62.307,0,0,1,7.949,29.056V74.18a69.224,69.224,0,0,1-21.141,48.54v23.83a4.076,4.076,0,0,1-2.469,3.721,3.991,3.991,0,0,1-1.573.254ZM104.009,11.383A14.782,14.782,0,0,0,89.261,26.148a15.424,15.424,0,0,0,1.894,6.19,4.059,4.059,0,0,1-.1,3.788c-5.378,9.539-8.1,18.621-8.1,27.263V74.18a59.922,59.922,0,0,0,21.023,44.515,4.11,4.11,0,0,1,1.454,3.078v15.594l10.148-9.251a4.008,4.008,0,0,1,4.144-.795c5.074,1.911,11.213,2.774,19.8,2.774a54.459,54.459,0,0,0,20.431-3.383,4.076,4.076,0,0,1,4.3.846l9.945,9.437V120.927a4.076,4.076,0,0,1,1.37-3.044,60.531,60.531,0,0,0,19.771-43.7V63.389c0-8.456-2.638-17.488-7.848-26.841a4.093,4.093,0,0,1-.169-3.6,18.08,18.08,0,0,0,1.691-6.765,14.748,14.748,0,0,0-22.156-12.769,4.059,4.059,0,0,1-3.755.118,55.373,55.373,0,0,0-47.9,0,4.008,4.008,0,0,1-3.788-.152,14.782,14.782,0,0,0-7.408-2Z" fill="#783741"/><path id="\u8DEF\u5F84_49" d="M253.921,246.331m-44.5,0a44.5,44.5,0,1,0,44.5-44.5,44.5,44.5,0,0,0-44.5,44.5Z" transform="translate(-114.767 -172.151)" fill="#fff"/><path id="\u8DEF\u5F84_50" d="M238.112,277.725a47.2,47.2,0,1,1,47.2-47.2,47.2,47.2,0,0,1-47.2,47.2Zm0-89a41.808,41.808,0,1,0,41.825,41.814A41.808,41.808,0,0,0,238.112,188.73Z" transform="translate(-98.975 -156.359)" fill="#783741"/><path id="\u8DEF\u5F84_51" d="M520.817,333.218H496.141a2.706,2.706,0,0,1-2.706-2.689v-27.06a2.706,2.706,0,1,1,5.4,0v24.354h21.987a2.706,2.706,0,0,1,0,5.4Z" transform="translate(-357.004 -256.349)" fill="#783741"/><path id="\u8DEF\u5F84_52" d="M476.2,468.607m-6.173,0a6.173,6.173,0,1,0,6.173-6.173A6.173,6.173,0,0,0,470.023,468.607Z" transform="translate(-337.043 -394.427)" fill="#ffbab0"/><path id="\u8DEF\u5F84_53" d="M460.485,461.872a8.862,8.862,0,1,1,8.862-8.862A8.862,8.862,0,0,1,460.485,461.872Zm0-12.329a3.383,3.383,0,1,0,3.467,3.383A3.467,3.467,0,0,0,460.485,449.543Z" transform="translate(-321.348 -378.83)" fill="#783741"/><path id="\u8DEF\u5F84_54" d="M292.684,246.952A2.469,2.469,0,1,1,290.2,244.5a2.469,2.469,0,0,1,2.486,2.452Zm35.754,35.771a2.452,2.452,0,1,1-.718-1.751A2.469,2.469,0,0,1,328.437,282.723Zm-35.754,35.754a2.469,2.469,0,1,1-2.486-2.469,2.469,2.469,0,0,1,2.486,2.469Zm-35.771-35.754a2.452,2.452,0,1,1-.712-1.745A2.469,2.469,0,0,1,256.913,282.723Z" transform="translate(-151.06 -208.543)" fill="#783741"/></g></symbol><symbol id="cloud" viewBox="0 0 129.158 83.28"><g id="\u4E91" transform="translate(-76.189 -168.553)"><path id="\u8DEF\u5F84_55" d="M206.4,229.909c.008-.33.049-.656.049-.989a32.275,32.275,0,0,0-61.432-13.86,16.492,16.492,0,0,0-23.826,12.033,24.99,24.99,0,0,0,8.05,48.645h77.209v0a22.913,22.913,0,0,0-.049-45.825Z" transform="translate(-23.904 -23.906)" fill="#98c4d8"/><path id="\u8DEF\u5F84_56" d="M178.331,201.836c.008-.33.049-.656.049-.989a32.275,32.275,0,0,0-61.432-13.86A16.492,16.492,0,0,0,93.121,199.02a24.99,24.99,0,0,0,8.05,48.645H178.38v0a22.913,22.913,0,0,0-.049-45.825Z" fill="#efd9a0"/><path id="\u8DEF\u5F84_57" d="M368.28,302.769c1.172,1.707,5.063,1.071,8.689-1.42s5.616-5.894,4.444-7.6-5.063-1.071-8.689,1.42S367.108,301.063,368.28,302.769Z" transform="translate(-248.447 -105.796)" fill="#fefefe"/><path id="\u8DEF\u5F84_58" d="M314.435,415.65c.782,1.138,3.029.951,5.02-.416s2.972-3.4,2.19-4.537-3.029-.951-5.02.416S313.653,414.512,314.435,415.65Z" transform="translate(-202.652 -205.566)" fill="#fefefe"/></g></symbol><symbol id="date" viewBox="0 0 1024 1024"><path d="M378.237 781.775l52.988 0 0-261.169-42.075 0c-1.575 9.872-4.697 18.197-9.422 24.919-4.697 6.75-10.491 12.094-17.381 16.2-6.806 4.106-14.541 6.975-23.091 8.606-8.578 1.631-17.522 2.306-26.719 2.109l0 39.881 65.672 0 0 169.453zM618.734 727.831c-3.853 4.641-8.55 8.297-14.175 11.137-5.569 2.925-11.841 4.275-18.816 4.275-11.925 0-21.797-3.488-29.447-10.603-7.734-7.088-12.206-16.65-13.472-28.603l-53.044 0c0.253 13.697 3.066 25.734 8.494 36.056 5.231 10.322 12.459 18.956 21.431 25.931 8.972 7.003 19.209 12.122 30.741 15.497 11.587 3.403 23.709 5.062 36.394 5.062 13.162 0.253 25.594-2.025 37.294-6.525 11.728-4.584 21.938-11.109 30.741-19.575 8.887-8.494 15.919-18.45 21.178-30.066 5.147-11.475 7.819-24.047 7.819-37.491 0-12.178-1.772-23.709-5.428-34.481-3.572-10.913-8.831-20.278-15.778-28.294-6.75-7.903-15.159-14.231-25.116-18.956-9.9-4.669-21.347-7.088-34.341-7.088-10.378 0-19.744 1.603-28.013 4.669-8.184 3.066-15.834 8.269-23.063 15.497l-0.703-0.731 10.378-59.288 107.831 0 0-43.65-145.856 0-25.791 144.338 47.756 0c5.288-7.228 10.884-12.544 16.875-15.863 5.962-3.347 13.669-5.034 23.119-5.034 7.256 0 13.556 1.237 19.013 3.769 5.484 2.475 10.153 5.963 14.231 10.434 3.909 4.444 6.919 9.731 8.944 15.638 1.969 6.047 2.925 12.375 2.925 19.069 0 6.412-0.984 12.713-3.122 18.9-2.166 6.019-5.091 11.306-9 15.975zM263.459 273.838l61.791 0c9.281 0 16.931-7.509 16.931-16.847l0-135.928c0-9.253-7.65-16.875-16.931-16.875l-61.791 0c-9.366 0-16.875 7.622-16.875 16.875l0 135.956c0 9.309 7.509 16.819 16.875 16.819zM698.806 273.838l61.734 0c9.45 0 16.931-7.509 16.931-16.847l0-135.928c0-9.253-7.481-16.875-16.931-16.875l-61.734 0c-9.309 0-16.875 7.622-16.875 16.875l0 135.956c0 9.309 7.566 16.819 16.875 16.819zM833.497 169.156l-21.853 0 0 87.862c0 28.125-22.809 51.019-51.075 51.019l-61.734 0c-28.153 0-51.075-22.894-51.075-51.019l0-87.863-271.378 0 0 87.863c0 28.125-22.95 51.019-51.075 51.019l-61.847 0c-28.153 0-51.075-22.894-51.075-51.019l0-87.863-21.881 0c-54.225 0-98.269 44.044-98.269 98.297l0 553.978c0 54.337 44.044 98.381 98.269 98.381l642.994 0c54.337 0 98.269-44.044 98.269-98.381l0-553.978c0-54.253-43.959-98.297-98.269-98.297zM869.609 821.431c0 19.997-16.172 36.197-36.113 36.197l-642.994 0c-19.913 0-36.113-16.2-36.113-36.197l0-371.531 715.219 0 0 371.531z" p-id="3602"/></symbol><symbol id="export" viewBox="0 0 34.958 34.958"><g id="\u5BFC\u51FA" transform="translate(-12.191)"><path id="\u8DEF\u5F84_61" d="M12.191,0H47.148V34.958H12.191Z" fill="rgba(144,144,144,0)"/><path id="\u8DEF\u5F84_62" d="M97.524,426.667m1.457,0H125.2a1.287,1.287,0,0,1,1.457,1.457v14.566a1.287,1.287,0,0,1-1.457,1.457H98.98a1.287,1.287,0,0,1-1.457-1.457V428.124A1.287,1.287,0,0,1,98.98,426.667Z" transform="translate(-82.42 -412.101)" fill="rgba(74,144,226,0.6)"/><path id="\u8DEF\u5F84_63" d="M256,51.716,264.909,61.9a.583.583,0,0,1-.44.966H246.646a.583.583,0,0,1-.44-.966l8.914-10.186a.583.583,0,0,1,.877,0Z" transform="translate(-225.888 -49.759)" fill="#4a90e2"/><path id="\u8DEF\u5F84_64" d="M396.19,384h8.74v11.653h-8.74Zm0,13.109h8.74v1.457h-8.74Z" transform="translate(-370.89 -370.891)" fill="#4a90e2"/><path id="\u8DEF\u5F84_65" d="M534.181,607.323m-1.457,0a1.457,1.457,0,1,0,1.457-1.457A1.457,1.457,0,0,0,532.724,607.323Z" transform="translate(-502.763 -585.183)" fill="#e02020"/></g></symbol><symbol id="left" viewBox="0 0 26.755 21.622"><path id="\u8FD4\u56DE" d="M3.358,84.609l8.8,8.8-1.351,1.351L0,83.954,10.811,73.143l1.351,1.351-8.2,8.2h22.8v1.911Z" transform="translate(0 -73.143)" fill="#fff"/></symbol><symbol id="life" viewBox="0 0 1113 1024"><path d="M964.982551 785.124839c-81.238296 0-147.266017-65.459794-147.266017-145.90793 0-80.448136 66.052414-145.90793 147.266017-145.90793 81.238296 0 147.290709 65.484486 147.290709 145.90793C1112.27326 719.665045 1046.220847 785.124839 964.982551 785.124839L964.982551 785.124839 964.982551 785.124839zM964.982551 541.088949c-54.61979 0-99.090967 44.026712-99.090967 98.12796 0 54.12594 44.471176 98.12796 99.090967 98.12796 54.61979 0 99.041582-44.002019 99.041582-98.12796C1063.99944 585.115661 1019.602341 541.088949 964.982551 541.088949L964.982551 541.088949 964.982551 541.088949zM427.72333 1023.999997c-235.862675 0-427.72333-186.724617-427.72333-416.191937l0-147.759867c0-13.210483 10.815311-23.902331 24.124564-23.902331l807.172841 0c13.333945 0 24.149256 10.691849 24.149256 23.902331l0 147.759867C855.446661 837.27538 663.561313 1023.999997 427.72333 1023.999997L427.72333 1023.999997 427.72333 1023.999997zM48.249128 483.950525l0 123.857535c0 203.145124 170.205341 368.411967 379.44951 368.411967 209.268862 0 379.474203-165.266843 379.474203-368.411967l0-123.857535L48.249128 483.950525 48.249128 483.950525 48.249128 483.950525zM251.221404 407.823575c-5.358271 0-10.667156-1.753167-15.185882-5.358271-3.061869-2.444557-75.13925-61.06453-74.077473-130.820818 0.49385-34.00156 17.383514-63.731319 50.224527-88.473196 24.939416-18.840371 37.162199-38.248669 36.297962-57.755737-1.926014-42.866165-61.039838-80.941986-61.632458-81.337066-11.259776-7.03736-14.642647-21.778777-7.53121-32.939783 7.111437-11.136313 22.00101-14.494492 33.236093-7.457132 3.333486 2.049477 81.040756 51.360381 84.077932 119.659812 1.629704 36.075729-16.988434 69.015513-55.21241 97.856342-20.717 15.630347-30.939691 32.371856-31.236001 51.212226-0.567927 38.816596 40.396915 80.275288 56.249495 92.967229 10.296769 8.271985 11.951166 23.309712 3.531026 33.581788C265.222047 404.786399 258.234072 407.823575 251.221404 407.823575L251.221404 407.823575 251.221404 407.823575zM454.786301 407.823575c-5.358271 0-10.716541-1.753167-15.185882-5.358271-3.037176-2.444557-75.13925-61.06453-74.126858-130.820818 0.518542-34.00156 17.432899-63.731319 50.273912-88.473196 24.939416-18.840371 37.137507-38.248669 36.248577-57.755737-1.901322-42.866165-61.039838-80.941986-61.607765-81.337066-11.210391-7.03736-14.642647-21.778777-7.53121-32.939783 7.13613-11.136313 22.025702-14.494492 33.260785-7.457132 3.308794 2.049477 81.040756 51.360381 84.05324 119.659812 1.629704 36.075729-16.988434 69.015513-55.237103 97.856342-20.717 15.630347-30.939691 32.371856-31.236001 51.212226-0.59262 38.816596 40.396915 80.275288 56.249495 92.967229 10.321461 8.271985 11.951166 23.309712 3.506334 33.581788C468.762251 404.786399 461.798968 407.823575 454.786301 407.823575L454.786301 407.823575 454.786301 407.823575zM658.301812 407.823575c-5.308886 0-10.691849-1.753167-15.16119-5.358271-3.086561-2.444557-75.13925-61.06453-74.102166-130.820818 0.518542-34.00156 17.408206-63.731319 50.249219-88.473196 24.939416-18.840371 37.137507-38.248669 36.248577-57.755737-1.876629-42.866165-61.015145-80.941986-61.607765-81.337066-11.235083-7.03736-14.642647-21.778777-7.53121-32.939783 7.111437-11.136313 22.025702-14.494492 33.260785-7.457132 3.284101 2.049477 81.016063 51.360381 84.028547 119.659812 1.605012 36.075729-16.988434 69.015513-55.237103 97.856342-20.741693 15.630347-30.939691 32.371856-31.236001 51.212226-0.567927 38.816596 40.396915 80.275288 56.224802 92.967229 10.321461 8.271985 11.951166 23.309712 3.580411 33.581788C672.327147 404.786399 665.339172 407.823575 658.301812 407.823575L658.301812 407.823575 658.301812 407.823575z" fill="#7878ff" p-id="863"/></symbol><symbol id="mangosteen" viewBox="0 0 64 68.968"><g id="\u5C71\u7AF9" transform="translate(-115.84 -68.864)"><path id="\u8DEF\u5F84_1" d="M149.479,232.433s-21.491,3.949-17.96,27.731,32.846,22.555,41.442,19.928,25.787-11.819,17.96-33.657c-4.143-11.257-13.813-14.279-18.418-14S149.479,232.433,149.479,232.433Z" transform="translate(-14.184 -144.724)" fill="#acacef"/><path id="\u8DEF\u5F84_2" d="M152.911,289.156a20.709,20.709,0,0,1-11-13.282c-2.691-10.692,1.607-21.883,1.607-21.883l2.193-3.676c-6.119,2.483-16.7,9.321-14.125,26.46,3.578,23.785,33.28,22.555,41.989,19.928a34.494,34.494,0,0,0,13.263-7.43,38.359,38.359,0,0,1-33.928-.118Z" transform="translate(-14.244 -161.333)" fill="#9e9aea"/><path id="\u8DEF\u5F84_3" d="M147.662,275.348c-6.093,0-13.259-1.21-19.306-5.037-6.858-4.34-10.934-11.154-12.119-20.262-1.888-14.514,3.32-22.7,8.022-27.008a25.368,25.368,0,0,1,10.836-5.923,1.132,1.132,0,0,1,.267-.025c.185,0,18.343.307,22.827,0,4.912-.336,13.884,3.1,18.528,13.931a1.269,1.269,0,0,1-.634,1.659,1.223,1.223,0,0,1-1.625-.647c-4.134-9.641-11.9-12.708-16.105-12.427-4.418.3-21,.038-22.885,0a23.491,23.491,0,0,0-9.647,5.377c-6.134,5.68-8.54,14-7.146,24.731,1.082,8.322,4.772,14.527,10.971,18.451,10.058,6.365,23.909,4.852,28.681,3.184,4.007-1.4,23.7-9.587,17.99-33.516a1.265,1.265,0,0,1,.905-1.525,1.234,1.234,0,0,1,1.493.924c6.22,26.055-15.229,34.973-19.59,36.5a37.62,37.62,0,0,1-11.465,1.6Z" transform="translate(0 -137.516)" fill="#000f04"/><path id="\u8DEF\u5F84_4" d="M239.735,148.631c-2.172-2.039-10.973-9.244-17.205,1.323a2.337,2.337,0,0,0,.643,3.1,13.6,13.6,0,0,0,6.772,2.084.52.52,0,0,1,.406.805c-.979,1.489-2.564,4.98.163,9.428a2.343,2.343,0,0,0,2.427,1.086c5.989-1.138,7.74-3,9.162-5.7a.613.613,0,0,1,1.016-.1c2.387,2.9,5.013,5.01,11.549,3.495a2.328,2.328,0,0,0,1.781-1.94c.539-3.949-.532-7.127-2.435-8.745a.557.557,0,0,1,.259-.964,8.009,8.009,0,0,0,4-2.195,2.314,2.314,0,0,0,.03-3.133c-2.989-3.362-10.563-7.618-17.645,1.389a.627.627,0,0,1-.924.066Z" transform="translate(-98.686 -68.946)" fill="#bfe5bd"/><path id="\u8DEF\u5F84_5" d="M254.295,154.632c-9.824-.757-8.5-5.826-5.959-9.173l-.059.011a13.416,13.416,0,0,0-3.2,1.227,14.415,14.415,0,0,0-3.225,2.634,7.714,7.714,0,0,0-1.282,2.117,3.89,3.89,0,0,0-.34-.521.628.628,0,0,1-.473-.17,19.023,19.023,0,0,0-1.818-1.507,4.649,4.649,0,0,0-1.071-.24c-7.456,6.6-12.148,5.161-14.482,3.41a2.332,2.332,0,0,0,.805,2.76,13.6,13.6,0,0,0,6.772,2.084.52.52,0,0,1,.406.805,8.184,8.184,0,0,0-1.352,4.208c3.927-6.022,9.214-6.513,10.119-5.313,3.362,4.866-5.387,11.457-5.394,11.464,5.364-1.149,7.023-2.963,8.383-5.542a.613.613,0,0,1,1.016-.1c1.592,1.929,3.292,3.51,6.177,3.9a10.822,10.822,0,0,1,1.142.092c-3.916-1.1-7.755-5.9-6.657-9.2s10.777-1.448,10.777-1.448a5.787,5.787,0,0,0-.547-.539.558.558,0,0,1,.259-.968Z" transform="translate(-98.707 -71.068)" fill="#a2dd9e"/><path id="\u8DEF\u5F84_6" d="M218.369,153.425a3.483,3.483,0,0,1-2.952-1.655,11.781,11.781,0,0,1-1.245-2.712,10.1,10.1,0,0,1-.277-1.119,1.109,1.109,0,1,1,2.18-.406,8.328,8.328,0,0,0,.214.872,9.748,9.748,0,0,0,1.02,2.209,1.234,1.234,0,0,0,1.275.576c5.856-1.112,7.215-2.9,8.39-5.128a1.7,1.7,0,0,1,1.341-.905,1.725,1.725,0,0,1,1.511.621c2.1,2.546,4.334,4.537,10.444,3.118a1.221,1.221,0,0,0,.935-1.009c.454-3.318-.333-6.288-2.054-7.751a1.649,1.649,0,0,1-.532-1.659,1.667,1.667,0,0,1,1.271-1.234,6.93,6.93,0,0,0,3.44-1.881,1.208,1.208,0,0,0,0-1.629,10.5,10.5,0,0,0-7.751-3.628c-2.915.089-5.671,1.759-8.191,4.965a1.735,1.735,0,0,1-2.549.188c-1.138-1.068-5.165-4.511-9.247-3.927-2.383.34-4.485,2.025-6.244,5.006a1.227,1.227,0,0,0,.333,1.633,12.5,12.5,0,0,0,6.192,1.88,1.63,1.63,0,0,1,1.264,2.523,7.092,7.092,0,0,0-.658,1.252,1.109,1.109,0,1,1-2.054-.835,8.5,8.5,0,0,1,.377-.813,13.965,13.965,0,0,1-6.41-2.209,3.431,3.431,0,0,1-.953-4.563c2.117-3.591,4.755-5.634,7.84-6.074,4.589-.654,8.782,2.449,10.7,4.16,2.863-3.48,6.07-5.3,9.539-5.405a12.784,12.784,0,0,1,9.476,4.371,3.434,3.434,0,0,1-.055,4.637,8.933,8.933,0,0,1-3.628,2.254c1.821,2.073,2.6,5.364,2.1,9.037a3.452,3.452,0,0,1-2.63,2.871c-6.864,1.589-9.879-.658-12.188-3.321-1.611,2.727-3.868,4.541-9.594,5.63a3.313,3.313,0,0,1-.628.059Z" transform="translate(-84.535 -54.761)" fill="#000f04"/><path id="\u8DEF\u5F84_7" d="M440.257,84.224s-4.847,5.49-5.582,11.808c-.044.868,1.326,2.287,4.119,1.282,1.1-.41.916-1.877.916-3.066s2.379-8.069,3.569-9.3a6.33,6.33,0,0,0-3.022-.724Z" transform="translate(-292.756 -14.252)" fill="#a2dd9e"/><path id="\u8DEF\u5F84_8" d="M422.782,84.518a3.852,3.852,0,0,1-2.335-.713,2.506,2.506,0,0,1-1.1-2.084.453.453,0,0,1,.007-.07c.765-6.584,5.645-12.177,5.852-12.413a1.1,1.1,0,0,1,.831-.373,6.99,6.99,0,0,1,3.691.949,1.1,1.1,0,0,1,.436.8,1.121,1.121,0,0,1-.31.857c-.942.972-3.229,7.489-3.259,8.531,0,.137,0,.281,0,.429.022,1.208.055,3.037-1.64,3.672a6.427,6.427,0,0,1-2.18.417Zm-1.212-2.708a.772.772,0,0,0,.34.307,2.829,2.829,0,0,0,2.287-.1c.214-.081.2-1.038.188-1.552,0-.159-.007-.318-.007-.473,0-1.131,1.622-6.162,3.018-8.771a7.883,7.883,0,0,0-.861-.118c-1.06,1.326-4.36,5.789-4.965,10.7Zm15.912,38.423a1.108,1.108,0,0,1-.514-2.091c4.962-2.586,7.8-6.528,8.423-11.712a1.109,1.109,0,0,1,2.2.266c-.5,4.093-2.564,9.742-9.6,13.411A1.121,1.121,0,0,1,437.482,120.232Zm8.93-17.782a1.105,1.105,0,0,1-1.094-.949l-.229-1.581a1.109,1.109,0,1,1,2.195-.318l.229,1.581a1.108,1.108,0,0,1-1.1,1.267Z" transform="translate(-275.083)" fill="#000f04"/></g></symbol><symbol id="menu" viewBox="0 0 1024 1024"><path d="M133.31 296.552h757.207c19.782 0 35.951-16.169 35.951-35.95 0-19.782-15.997-35.952-35.95-35.952H133.31c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951zM890.517 476.135H133.311c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951h757.207c19.782 0 35.951-16.17 35.951-35.951 0-19.782-16.17-35.95-35.95-35.95zM890.517 727.448H133.311c-19.782 0-35.951 15.997-35.951 35.95s16.17 35.952 35.95 35.952h757.207c19.782 0 35.951-15.998 35.951-35.951s-16.17-35.951-35.95-35.951z" p-id="2070"/></symbol><symbol id="notes" viewBox="0 0 1040 1024"><path d="M807.280423 1024H178.793651c-97.52381 0-178.793651-81.269841-178.793651-178.793651V216.719577C0 119.195767 81.269841 37.925926 178.793651 37.925926h422.603174s16.253968 0 16.253969 21.671958-16.253968 21.671958-16.253969 21.671957H178.793651C102.941799 81.269841 43.343915 140.867725 43.343915 216.719577v628.486772c0 75.851852 59.597884 135.449735 135.449736 135.449736h628.486772c75.851852 0 135.449735-59.597884 135.449736-135.449736V482.201058s0-16.253968 21.671957-16.253968 21.671958 16.253968 21.671958 16.253968v363.005291c0 102.941799-81.269841 178.793651-178.793651 178.793651z m-471.365079-330.497354l81.269841-276.317461L785.608466 54.179894l32.507936-32.507936c27.089947-27.089947 70.433862-27.089947 97.52381 0l108.359788 108.359788c10.835979 10.835979 16.253968 27.089947 16.253968 43.343915 0 16.253968-5.417989 37.925926-21.671957 48.761905l-65.015873 65.015873-335.915344 335.915344-281.73545 70.433863z m119.195767-254.645503l-54.179894 195.047619 195.047619-54.179894 357.587302-352.169312 37.925925-37.925926c5.417989-5.417989 10.835979-10.835979 10.835979-21.671958 0-5.417989 0-10.835979-5.417989-16.253968l-108.359788-108.359789c-10.835979-10.835979-27.089947-10.835979-37.925926 0L785.608466 108.359788 455.111111 438.857143z" p-id="2118"/></symbol><symbol id="notify" viewBox="0 0 33.667 33.667"><g id="\u901A\u77E5" transform="translate(-64 -64)"><path id="\u8DEF\u5F84_69" d="M441.018,441.018m-9.018,0A9.018,9.018,0,1,0,441.018,432,9.018,9.018,0,0,0,432,441.018Z" transform="translate(-354.173 -354.173)" fill="#eefaf0"/><path id="\u8DEF\u5F84_70" d="M96.164,91.054h-2.1V79.026A13.273,13.273,0,0,0,82.487,65.905v-.252a1.653,1.653,0,0,0-3.307,0v.252A13.273,13.273,0,0,0,67.607,79.026V91.054H65.5a1.5,1.5,0,0,0,0,3.006H77.08a3.757,3.757,0,0,0,7.507,0H96.164a1.5,1.5,0,0,0,0-3.006Zm-15.33,4.208a1.355,1.355,0,0,1-1.345-1.2h2.687A1.348,1.348,0,0,1,80.833,95.262Zm10.22-4.212H70.613V79.026a10.071,10.071,0,0,1,.8-3.96,10.375,10.375,0,0,1,5.456-5.456,10.155,10.155,0,0,1,7.921,0,10.375,10.375,0,0,1,5.456,5.456,10.071,10.071,0,0,1,.8,3.96Z" fill="#1cc6a1"/><path id="\u8DEF\u5F84_71" d="M645.353,456A1.357,1.357,0,0,0,644,457.353v6.313a1.353,1.353,0,0,0,2.705,0v-6.313A1.357,1.357,0,0,0,645.353,456Z" transform="translate(-558.207 -377.271)" fill="#08b28a"/></g></symbol><symbol id="pig" viewBox="0 0 128 130.372"><g id="\u5B58\u94B1\u7F50" transform="translate(-90.062 -86.836)"><path id="\u8DEF\u5F84_9" d="M256.4,176.325a.656.656,0,0,1,.031-.644,24.183,24.183,0,0,0,3.662-15.71c-1.141-8.666-2.188-13.755-2.553-15.415a.666.666,0,0,0-.753-.512l-13.121,1.893a.07.07,0,0,0-.039.008c-.4.031-6.991.6-11.864,4.158a.65.65,0,0,1-.706.054,59.443,59.443,0,0,0-9.311-4.019,1.579,1.579,0,0,1-.993-2.064l.1-.272a2.208,2.208,0,0,0-2.064-3H187.526a2.208,2.208,0,0,0-2.041,3.064,1.585,1.585,0,0,1-.993,2.118,59.009,59.009,0,0,0-9.575,4.058.669.669,0,0,1-.691-.047c-4.849-3.452-11.3-4-11.7-4.034a.07.07,0,0,1-.039-.008l-13.121-1.893a.672.672,0,0,0-.753.512c-.365,1.66-1.412,6.75-2.553,15.416A24.2,24.2,0,0,0,149.5,175.34a.642.642,0,0,1,.023.636,59.412,59.412,0,0,0,4.842,61.468.683.683,0,0,1,.124.357l.854,22.615a2.154,2.154,0,0,0,2.149,2.071h4.089a2.168,2.168,0,0,0,1.932-1.195l4.058-7.952c.178-.357,4,.209,4.337.419a59.426,59.426,0,0,0,62.181-.085.669.669,0,0,1,.954.272l3.647,7.355a2.145,2.145,0,0,0,1.932,1.195h7.93a2.149,2.149,0,0,0,2.149-2.071l.869-22.918a.748.748,0,0,1,.116-.357,59.67,59.67,0,0,0,4.71-60.824ZM201.407,233.17c-12.531,0-25.17-8.775-25.17-21.3s11.243-26.192,23.774-26.192,24.371,11.909,24.371,24.438a23.252,23.252,0,0,1-22.975,23.057Z" transform="translate(-46.443 -47.2)" fill="#ffa750"/><path id="\u8DEF\u5F84_10" d="M201.266,217.208h-8.2a4.486,4.486,0,0,1-4.048-2.517l-3-6.045a63.71,63.71,0,0,1-63.648.084l-2.954,5.961a4.479,4.479,0,0,1-4.048,2.51h-8.2a4.506,4.506,0,0,1-4.515-4.354l-.865-22.887a63.712,63.712,0,0,1-5.3-64.712,27.331,27.331,0,0,1-3.42-16.536c1.186-8.991,2.265-14.309,2.678-16.176a3,3,0,0,1,3.344-2.311L112.6,92.177a29.729,29.729,0,0,1,12.35,4.025,64.56,64.56,0,0,1,8.792-3.7,4.58,4.58,0,0,1,4.453-5.67h32.306a4.584,4.584,0,0,1,4.407,5.846,63.1,63.1,0,0,1,8.486,3.642,29.538,29.538,0,0,1,12.534-4.147l13.513-1.951a3,3,0,0,1,3.344,2.311c.413,1.859,1.492,7.154,2.678,16.13a27.33,27.33,0,0,1-3.642,16.979,63.954,63.954,0,0,1-5.165,63.992l-.88,23.208a4.512,4.512,0,0,1-4.515,4.362ZM186.689,203.4a3.075,3.075,0,0,1,.826.115,3,3,0,0,1,1.852,1.546l3.765,7.6,8.065-.038.9-23.614a3.006,3.006,0,0,1,.536-1.6,59.378,59.378,0,0,0,4.7-60.511,2.945,2.945,0,0,1,.145-2.908,22.821,22.821,0,0,0,3.443-14.76c-.926-7.017-1.783-11.715-2.3-14.232l-12.067,1.745a1.038,1.038,0,0,1-.153.015c-.306.023-6.6.559-11.118,3.864a3,3,0,0,1-3.176.222,59.129,59.129,0,0,0-9.259-4,3.991,3.991,0,0,1-2.334-2.066,3.907,3.907,0,0,1-.115-3.076l.107-.283-32.3.015a3.845,3.845,0,0,1-.046,3.13,3.962,3.962,0,0,1-2.38,2.112,59.775,59.775,0,0,0-9.527,4.033,2.969,2.969,0,0,1-3.122-.207c-4.515-3.214-10.674-3.734-10.934-3.749-.054-.008-.153-.015-.207-.023L99.933,94.985c-.513,2.517-1.37,7.231-2.3,14.278a22.394,22.394,0,0,0,3.237,14.37,2.958,2.958,0,0,1,.115,2.885,59.128,59.128,0,0,0,4.813,61.154,2.939,2.939,0,0,1,.559,1.622l.88,23.308h8.134l3.665-7.468a2.977,2.977,0,0,1,4.239-1.217,59.114,59.114,0,0,0,61.85-.092,3.088,3.088,0,0,1,1.561-.428Zm-65.829,4.446ZM102.067,190.365ZM211.435,124.85ZM184.271,96.8Z" transform="translate(0 0)" fill="#333"/><path id="\u8DEF\u5F84_11" d="M414.487,490.007m-17.431,0a17.431,17.431,0,1,0,17.431-17.431,17.431,17.431,0,0,0-17.431,17.431Z" transform="translate(-257.555 -323.74)" fill="#ff917b"/><path id="\u8DEF\u5F84_12" d="M367.65,464.759a21.589,21.589,0,1,1,21.589-21.589A21.613,21.613,0,0,1,367.65,464.759Zm0-39.328a17.739,17.739,0,1,0,17.739,17.739A17.759,17.759,0,0,0,367.65,425.431Z" transform="translate(-213.588 -279.451)" fill="#333"/><path id="\u8DEF\u5F84_13" d="M313.4,345.118c-3.908,0-7.079-2.355-7.079-5.243s3.18-5.243,7.079-5.243,7.079,2.355,7.079,5.243S317.3,345.118,313.4,345.118Zm0-6.636c-1.04,0-1.88.623-1.88,1.393s.84,1.393,1.88,1.393,1.88-.623,1.88-1.393S314.428,338.482,313.4,338.482Zm23.335,6.636c-3.9,0-7.079-2.355-7.079-5.243s3.18-5.243,7.079-5.243,7.079,2.355,7.079,5.243S340.64,345.118,336.732,345.118Zm0-6.636c-1.04,0-1.88.623-1.88,1.393s.841,1.393,1.88,1.393,1.88-.623,1.88-1.393S337.772,338.482,336.732,338.482Zm-28.2-22.738c-1.438,0-2.6-.86-2.6-1.925,0-3.164-3.475-5.737-7.747-5.737s-7.747,2.574-7.747,5.737c0,1.065-1.161,1.925-2.6,1.925s-2.6-.86-2.6-1.925c0-5.288,5.806-9.588,12.946-9.588s12.946,4.3,12.946,9.588C311.127,314.884,309.966,315.744,308.527,315.744Zm53.706,0c-1.438,0-2.6-.86-2.6-1.925,0-3.164-3.475-5.737-7.747-5.737s-7.747,2.574-7.747,5.737c0,1.065-1.161,1.925-2.6,1.925s-2.6-.86-2.6-1.925c0-5.288,5.806-9.588,12.946-9.588s12.946,4.3,12.946,9.588C364.833,314.884,363.672,315.744,362.233,315.744Z" transform="translate(-170.709 -181.775)" fill="#333"/></g></symbol><symbol id="sun" viewBox="0 0 1024 1024"><path d="M960 512l-128 128v192h-192l-128 128-128-128H192v-192l-128-128 128-128V192h192l128-128 128 128h192v192z" fill="#FFD878" p-id="896"/><path d="M736 512a224 224 0 1 0-448 0 224 224 0 1 0 448 0z" fill="#FFE4A9" p-id="897"/><path d="M512 109.248L626.752 224H800v173.248L914.752 512 800 626.752V800h-173.248L512 914.752 397.248 800H224v-173.248L109.248 512 224 397.248V224h173.248L512 109.248M512 64l-128 128H192v192l-128 128 128 128v192h192l128 128 128-128h192v-192l128-128-128-128V192h-192l-128-128z" fill="#4D5152" p-id="898"/><path d="M512 320c105.888 0 192 86.112 192 192s-86.112 192-192 192-192-86.112-192-192 86.112-192 192-192m0-32a224 224 0 1 0 0 448 224 224 0 0 0 0-448z" fill="#4D5152" p-id="899"/></symbol></svg>'
const Z = P.getElementsByTagName('svg')[0]
Z &&
  ((Z.style.position = 'absolute'),
  (Z.style.width = 0),
  (Z.style.height = 0),
  (Z.style.overflow = 'hidden'),
  Z.setAttribute('aria-hidden', 'true'))
document.addEventListener('DOMContentLoaded', () => {
  document.body.firstChild ? document.body.insertBefore(P, document.body.firstChild) : document.body.appendChild(P)
})
const w1 = I1({ history: O0, routes: T0 }),
  $0 = L1(),
  t1 = T1(H0)
t1.use(w1)
t1.use($0)
t1.mount('#app')
const k1 = F1(),
  { mePromise: j0 } = H1(k1)
k1.fetchMe()
const c1 = { '/': 'exact', '/items': 'exact', '/welcome': 'startsWith', '/sign_in': 'startsWith' }
w1.beforeEach((F, a) => {
  for (const t in c1) {
    const e = c1[t]
    if ((e === 'exact' && F.path === t) || (e === 'startsWith' && F.path.startsWith(t))) return !0
  }
  return j0.value.then(
    () => !0,
    () => '/sign_in?return_to=' + a.path
  )
})
export {
  Q1 as B,
  W as F,
  b as I,
  D1 as M,
  B as T,
  T as a,
  Yu as b,
  eu as c,
  $ as d,
  e0 as e,
  Y0 as g,
  S as h,
  F1 as u,
  tu as v
}
