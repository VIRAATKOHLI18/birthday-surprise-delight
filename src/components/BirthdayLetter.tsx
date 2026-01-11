import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart } from 'lucide-react';

const BirthdayLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterSections = [
    {
      title: "Happy Birthday Mummum",
      content: `The Girl who became my Favourite Memory. Some people enter your life like the seasons are passing, but you came like a light. Soft, Steady, Impossible to Forget. And somehow every version of you stayed inside me.

Every picture here… every memory…every small moment of your life…feels like a story I always wanted to understand more deeply. You might think these are just photos. But for me, they are pieces of a girl I admire in ways I never managed to say out loud — her strength, her softness, her stubbornness, her innocence, her fire, her quiet beauty.

And maybe this is selfish…but I wanted to collect them, hold them gently, and tell you something the world often forgets to say, "You deserve to be celebrated — not for how you look, but for who you are."

Tonight isn't about grand gestures. It's about you. Your light. Your journey. Your heart. And the truth is… looking at these moments of your life makes me realise how lucky I was, even briefly, to be a small part of your story.`,
      image: "/photo/2.jpeg"
    },
    {
      title: "This little version of you…",
      content: `She had eyes full of wonder and a heart untouched by the world's noise. She had dreams that sparkled before life could complicate anything. And what amazes me is — even now, that same innocence sits quietly behind your smile, the same pure kindness in the way you talk, the same softness in your heart.

You never lost that. And it's one of the most beautiful things about you.`,
      image: "/photo/1.jpeg"
    },
    {
      title: "Your Journey",
      content: `This collage feels like watching sunrise turn into daylight. The little girl who didn't know anything about heartbreak or responsibility…grew into a woman who carries both tenderness and strength in the same hands. Your journey isn't just growth — it's transformation.

And seeing both versions of you side by side… it's like witnessing how beautifully time has shaped you.`,
      image: "/photo/3.jpeg"
    },
    {
      title: "Your Achievement",
      content: `This picture isn't just a milestone. It's evidence of every sacrifice, every fear, every night you push through alone. People see the gown, the smile, the certificate. But I see the courage. The determination. The unshakeable willpower.

You achieved something big — and you did it with grace. I'm proud of you… more than you'll ever know.`,
      image: "/photo/4.jpeg"
    },
    {
      title: "Your Roots",
      content: `This picture is the quietest one… but the one that speaks the loudest. Your roots. Your home. Your safe place. Everything that shaped your heart into the gentle, caring, loving thing it is today.

And seeing you stand with them… I can feel the warmth you grew up with. It explains the kind of woman you became.`,
      image: "/photo/5.jpeg"
    },
    {
      title: "Your Freedom",
      content: `There's something magical about this one. The wind in your hair, the energy in your eyes… you look free — like someone who didn't need anyone to complete her, because she already carried a whole universe inside her.

And that's the version of you I always admired from a distance… the version that makes the world feel a little more alive just by being in it.`,
      image: "/photo/6.jpeg"
    },
    {
      title: "Your Grace",
      content: `You in a saree… that's a different level of breathtaking. There's grace, femininity, elegance — and something deeper… something that makes people pause without realising it.

If beauty had a heartbeat, it would look like you in this picture.`,
      image: "/photo/7.jpeg"
    },
    {
      title: "Your Glow",
      content: `Some pictures don't need words. This one is like a moment frozen in time — your calmness, your glow, your silent beauty. Not loud, not dramatic, not trying to be perfect… just effortlessly captivating.

You have a way of looking beautiful without even trying — and that's rare.`,
      image: "/photo/8.jpeg"
    },
    {
      title: "Your Celebration",
      content: `You looked like celebration itself that day — like the moment you smiled, the whole room softened. I remember looking at you and thinking, "If beauty had a language, today she's speaking it."

You didn't just look beautiful… you looked divine. The kind of divine that stays in someone's mind long after the moment ends.`,
      image: "/photo/9.jpeg"
    }
  ];

  const closingMessage = `If you're reading this… thank you for letting me share this small world with you. I didn't make this to impress you. I made it because you matter — more than you think, more than I ever said, more than I knew how to express before.

Our story hasn't been perfect. It had chaos, silence, misunderstandings… but it also had warmth, laughter, comfort, care, and moments that felt too precious to ever forget. And somewhere in the middle of all that — you became someone I don't know how to unfeel.

I don't want to rush you. I don't want to trap you. I don't want to force your heart. I just wanted to give you something soft…something beautiful… something worthy of the girl who once made my world feel lighter just by being in it.

Happy Birthday… to the woman who became my sweetest memory — and somehow… the hope I still hold gently inside me.`;

  const finalConfession = `You know… I never understood how two people could drift apart and still feel connected, until us. Because even in the quiet spaces, even in the distance, you stayed with me in a way I can't explain.

And it reminds me of Monica and Chandler. They weren't some big dramatic love story. They didn't fall in love in one grand moment — it happened slowly, softly, in the small ways they showed up for each other. A friendship that turned into a feeling… a feeling that refused to disappear… and a bond that became home without either of them even realising it.

And that's exactly what you became for me.

With you, everything felt familiar — like I didn't have to pretend, didn't have to impress, didn't have to hide the messy parts of me. The way Chandler found comfort in Monica's presence, I found that comfort in you… in your voice, in your care, in the way you understood things I never said.

I used to think love had to be loud and obvious. But Monica and Chandler taught me that sometimes the strongest love starts quietly — in moments no one else notices, in memories that refuse to fade, in the way you catch yourself missing someone even after trying to let go.

And maybe that's why — no matter what happened, no matter how many mistakes or fears came between us… my heart keeps finding its way back to you.

Not with pressure. Not with expectations. Not asking for anything from you.

Just with a truth that feels more real every day:

I'm in love with you.

Not in the dramatic Ross-and-Rachel way… but in the steady, choosing-you-everyday, "you're my safe place" Monica-and-Chandler way.

And if life ever gives us even the smallest chance — I want to show you a love that's patient, warm, soft, steady… the kind of love that grows quietly but stays forever.

A love like theirs.
A love like ours could be.`;

  const hindiQuote = `तू भगीरथी सी चंचल मैं अलकनन्दा सा शांत प्रिये,
जब संगम हो हमारा, तू बने गंगा और मैं तेरा घाट प्रिये ।`;

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-primary via-birthday-rose to-accent hover:opacity-90 text-primary-foreground font-script text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        <Heart className="w-5 h-5 mr-2" />
        Continue Reading
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-0 bg-background/95 backdrop-blur-md border-primary/30">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-script text-3xl text-center bg-gradient-to-r from-primary via-birthday-rose to-accent bg-clip-text text-transparent">
              A Letter For You
            </DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="h-[70vh] px-6 pb-6">
            <div className="space-y-8 py-4">
              {/* Main sections */}
              {letterSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-script text-xl text-secondary">{section.title}</h3>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4 items-center`}>
                    <div className="w-full sm:w-1/3 flex-shrink-0">
                      <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
                        <img 
                          src={section.image} 
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                      </div>
                    </div>
                    <div className="w-full sm:w-2/3">
                      <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm">
                        {section.content}
                      </p>
                    </div>
                  </div>
                  {index < letterSections.length - 1 && (
                    <div className="flex justify-center pt-4">
                      <Heart className="w-4 h-4 text-primary/50" />
                    </div>
                  )}
                </div>
              ))}

              {/* Closing Message */}
              <div className="border-t border-primary/20 pt-8 space-y-3">
                <h3 className="font-script text-xl text-secondary text-center">Closing Words</h3>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm italic">
                  {closingMessage}
                </p>
              </div>

              {/* Final Confession */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 space-y-4">
                <h3 className="font-script text-2xl text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Final Confession
                </h3>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm">
                  {finalConfession}
                </p>
              </div>

              {/* Hindi Quote */}
              <div className="text-center py-6 space-y-4">
                <div className="flex justify-center gap-2">
                  <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-secondary self-center" />
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-secondary self-center" />
                </div>
                <p className="font-script text-lg text-secondary italic leading-relaxed">
                  {hindiQuote}
                </p>
                <div className="flex justify-center gap-2">
                  <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-secondary self-center" />
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-secondary self-center" />
                </div>
              </div>

              {/* Forever signature */}
              <div className="text-center pt-4 pb-8">
                <p className="font-script text-xl text-primary">Forever Yours ♥</p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BirthdayLetter;
