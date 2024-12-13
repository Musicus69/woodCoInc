import Card from "./Card";
import Regards from "./Regards";
import Body from "./Body";

function Testimonials() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* <h1 className="font-bold text-2xl mb-4">Testimonials</h1> */}
      <Card>
        <Body>
          During the past few years, Wood Brokers has been performing selective
          cutting on our 700 acres that are adjacent to Branders Bridge Road in
          Chesterfield County. Wood Brokers understands which trees to remove in
          order to maximize both the revenue for the landowner as well as
          subsequent tree growth, and we heartily recommend them as forestry
          managers.
        </Body>
        <Regards>
          <p>Sincerely,</p>
          <p>Paul R. Swenson</p>
          <p>VP/CFO</p>
          <p>Lucas Properties, LLC</p>
          <p>January 14, 2019</p>
        </Regards>
      </Card>
      <Card>
        <p>To anyone considering timbering land, </p>
        <Body>
          I would highly recommend Doug Brewster with Wood Brokers to anyone
          looking to timber their land. I was pleasantly surprised at Doug's
          professionalism and initiative at navigating the beginning process
          with Chesterfied County, even when several permitting roadblocks were
          thrown up, along the way, due to the zoning status of the parcel. He
          handled each situation with courtesty and professionalism, both to
          myself and to Chesterfield County. During the timbering process of
          Reading Springs, Doug called with regular updates of the job and any
          issues that may have come up. When I went out to walk the land during
          and after the timbering process, I was pleasantly surprised at how
          tidy they kept the land, you could tell that they take pride in their
          work. They did not scalp the land and left quite a few large trees,
          that they could've gotten while they were there, but left them for the
          benefit of the environment. I had made several requests of Doug before
          the process started and he honored all of them, including cutting the
          trees down to ground level. He has been a man of his word throughout
          the entire processs and has been respectful to my employees and the
          county inspectors. When we were wrapping up, at the end of the
          process, the environmental inspector called me specifically to let me
          know that "Mr. Brewster did a fantastic job, he's seen a bunch of
          other timbering sites and this guy's was a step ahead, always, he
          cleaned up daily, not at the end of the week. He did a very good job.
          You couldn't ask for anything cleaner. It's a good thumbs up on that
          job." When a County inspector is impressed, it says a lot. I would
          highly recommend Doug Brewster and his company, Wood Brokers, for any
          timbering project.
        </Body>
        <Regards>
          <p>Sincerely,</p>
          <p>Debbie Stoddard,VP</p>
          <p>Finer Homes, Inc.</p>
          <p>May 24, 2016</p>
        </Regards>
      </Card>
      <Card>
        <p>Dear Mr. Brewster, </p>
        <Body>
          In 2015, you clearcut a hardwood as well as a loblolly pine stand for
          us, and you also conducted a loblolly pine seed-tree thinning. I would
          like to thank you for your excellent work. Throughout, you kept in
          close contact with us to ensure that your work met our goals. You also
          continually assessed the timber in order to make certain that you
          obtained the highest possible value from each log, which benefitted us
          both. Furthermore, you and your staff were careful to minimize and
          ameliorate any potential resource damage. The three stands, logging
          decks, and forest roads were left free of trash, and slash was spread
          out across the logging deck and skid rows to minimize the potential
          for erosion and to allow decomposition. We have been very pleased with
          the results of your work.
        </Body>
        <Regards>
          <p>Sincerely,</p>
          <p>Irene C. Frentz</p>
          <p>District 4 Resource Specialist</p>
          <p>Pocahontas State Park</p>
          <p>January 13, 2016</p>
        </Regards>
      </Card>
      <Card>
        <p>To whom it may concern, </p>
        <Body>
          I have known Mr. Doug Brewster for the past 9 years. He has done
          timber harvesting for me twice in this time. I have found him to be
          reliable and honest, as well as a good Christian man. I have met his
          three sons and they are of his caliber as well. Mr. Brewster does
          excellent work and takes very good care of his equipment. His work
          area and loading deck are kept clean and safe. I would highly
          recommend him to anyone.
        </Body>
        <Regards>
          <p>Emmett Eggleston</p>
        </Regards>
      </Card>
    </div>
  );
}

export default Testimonials;
